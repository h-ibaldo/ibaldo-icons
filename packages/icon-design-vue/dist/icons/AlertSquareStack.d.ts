import type { DefineComponent } from 'vue';

export interface AlertSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertSquareStack: DefineComponent<AlertSquareStackProps>;

export default AlertSquareStack;
export { AlertSquareStack };
