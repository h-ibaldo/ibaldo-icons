import type { DefineComponent } from 'vue';

export interface AlertSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertSquareSmall: DefineComponent<AlertSquareSmallProps>;

export default AlertSquareSmall;
export { AlertSquareSmall };
