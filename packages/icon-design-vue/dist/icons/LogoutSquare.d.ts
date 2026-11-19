import type { DefineComponent } from 'vue';

export interface LogoutSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LogoutSquare: DefineComponent<LogoutSquareProps>;

export default LogoutSquare;
export { LogoutSquare };
