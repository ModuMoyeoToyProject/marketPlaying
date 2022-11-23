import React, { useState } from "react";
import { QueryClient } from "react-query";

export const ErrorHandler = () => {
  const [errorTitle, setErrorTitle] = useState("");

  function queryErrorHandler(error: any) {
    const title =
      error instanceof Error ? error.message : "Error connecting to server";

    alert(title);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });

  return { queryErrorHandler, queryClient };
};
