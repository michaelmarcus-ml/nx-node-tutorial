import { randomUUID } from 'node:crypto'

export type AuthResponse = AuthSuccessResponse | AuthFailureResponse;
export interface AuthSuccessResponse {
  success: true;
  name: string;
  token: string;
}
export interface AuthFailureResponse {
  success: false;
}

export function doAuth(): AuthResponse {
  return { success: true, name: 'Cheddar', token: randomUUID() };
}
