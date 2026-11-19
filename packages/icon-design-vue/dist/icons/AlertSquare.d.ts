import type { DefineComponent } from 'vue';

export interface AlertSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertSquare: DefineComponent<AlertSquareProps>;

export default AlertSquare;
export { AlertSquare };
