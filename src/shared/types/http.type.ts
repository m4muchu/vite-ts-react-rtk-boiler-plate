export interface  IGenericHttpResponse<T = any> {
  data?: T;
  message?: string;
  success?: boolean;
}

export type TEditEntity<Entity, IdType> = Partial<Entity> & { id: IdType };
