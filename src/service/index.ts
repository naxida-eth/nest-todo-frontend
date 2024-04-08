export interface ImportMetaEnvDev extends ImportMetaEnv {
  VITE_API_URL: string;
  VITE_API_PORT: string;
}

export const getENV = (key: keyof ImportMetaEnvDev) => {
  return import.meta.env[key];
};
export const baseURL = `${getENV("VITE_API_URL")}:${getENV("VITE_API_PORT")}`;

export const getRequestURL = ({ path = "graphql" }: { path?: string }) => {
  return `${baseURL}/${path}`;
};

export const request = <T = unknown>({
  path = "graphql",
  options,
}: {
  options?: RequestInit;
  path?: string;
}): Promise<T> => {
  return fetch(getRequestURL({ path }), options)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
0