import { useState, useEffect } from "react";
import { endPointKeys } from "../../config/api-calls";
import { ITransaction } from "../../models/transaction";
import axios from "axios";
import { useSelector } from "react-redux";

export function useFetchTransactions(requestData: any) {
  const [data, setData] = useState<ITransaction[]>();
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
    const url = endPointKeys.base + "/api/transaction/" + requestData;
    axios
      .get(
        url,
        config(url, requestData, currentUser ? currentUser.bearerToken : "")
      )
      .then(
        res => {
          setData(res.data);
        },
        error => {
          console.log({ error });
        }
      );
  }, []);

  return data;
}
