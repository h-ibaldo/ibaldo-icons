import type { DefineComponent } from 'vue';

export interface AlertSquareStackSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertSquareStackSide: DefineComponent<AlertSquareStackSideProps>;

export default AlertSquareStackSide;
export { AlertSquareStackSide };
