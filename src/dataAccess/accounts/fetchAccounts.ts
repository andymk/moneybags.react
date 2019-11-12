import { useState, useEffect } from "react";
import { endPointKeys } from "../../config/api-calls";
import { IAccount } from "../../models/accounts";
import axios from "axios";

export function useFetchAccounts() {
  const [data, setData] = useState<IAccount[]>();

  useEffect(() => {
    axios.get(endPointKeys.base + "/api/accounts").then(res => {
      setData(res.data);
    });
  });

  return data;
}
