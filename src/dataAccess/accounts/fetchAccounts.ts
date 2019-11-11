import React, { useState, useEffect } from "react";
import { api, endPointKeys } from "../../config/api-calls";
import { map } from "rxjs/operators";

export function useFetchAccounts() {
  const [data, setData] = useState([]);
  const url = "";

  const doStuff = async () => {
    api.get(endPointKeys.base, "api/accounts/").pipe(
      map(res => res),
      map((accounts: never[]) => {
        setData(accounts);
      })
    );
    // const resp = await fetch(url);
    // const json = await resp.json();
    // setData(json);
  };

  useEffect(() => {
    doStuff();
  });

  return data;
}
