import type { DefineComponent } from 'vue';

export interface AlertSquareStackOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertSquareStackOverlap: DefineComponent<AlertSquareStackOverlapProps>;

export default AlertSquareStackOverlap;
export { AlertSquareStackOverlap };
