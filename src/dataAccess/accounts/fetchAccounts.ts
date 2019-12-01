import { useState, useEffect } from "react";
import { endPointKeys } from "../../config/api-calls";
import { IAccount } from "../../models/accounts";
import axios from "axios";
import { useSelector } from "react-redux";

export function useFetchAccounts() {
  const [data, setData] = useState<IAccount[]>();
  const [isProcessing, setIsProcessing] = useState(false);
  const currentUser: any = useSelector((state: any) => state.session.User);

  const config = (url: string, dataObj: any, token: string) => {
    return {
      url,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: dataObj || {}
    };
  };

  useEffect(() => {
    const url = endPointKeys.base + "/api/accounts";
    setIsProcessing(true);
    axios
      .get(url, config(url, null, currentUser ? currentUser.bearerToken : ""))
      .then(
        res => {
          setData(res.data);
          setIsProcessing(false);
        },
        error => {
          console.log({ error });
          setIsProcessing(false);
        }
      );
  }, []);

  return [data, isProcessing];
}
