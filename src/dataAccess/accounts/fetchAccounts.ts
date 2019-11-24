import { useState, useEffect } from "react";
import { endPointKeys } from "../../config/api-calls";
import { IAccount } from "../../models/accounts";
import axios from "axios";
import { user } from "../../helpers/user";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/state/IAppState";

export function useFetchAccounts() {
  const [data, setData] = useState<IAccount[]>();
  const currentUser: any = useSelector((state: any) => state.session.User);

  const config = (url: string, dataObj: any, token: string) => {
    console.log(token);
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
    axios
      .get(url, config(url, null, currentUser ? currentUser.bearerToken : ""))
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
