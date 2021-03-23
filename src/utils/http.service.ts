export interface FetchResponse<T> {
  status: number;
  data?: T;
  error?: any;
}

export const httpService = async <T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<FetchResponse<T>> => {
  if (init?.body) {
    // eslint-disable-next-line no-param-reassign
    init.headers = {
      ...init.headers,
      'Content-Type': 'application/json',
    };
  }
  const response = await fetch(input, init);
  const { status } = response;
  const data = await response.json();
  const isSuccess = status >= 200 && status < 300;
  return {
    status,
    [isSuccess ? 'data' : 'error']: data,
  };
};
