import type { DefineComponent } from 'vue';

export interface LoginSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LoginSquare: DefineComponent<LoginSquareProps>;

export default LoginSquare;
export { LoginSquare };
