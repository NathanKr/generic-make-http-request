export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch',
  }