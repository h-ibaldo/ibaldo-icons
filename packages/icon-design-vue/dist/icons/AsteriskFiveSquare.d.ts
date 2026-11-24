import type { DefineComponent } from 'vue';

export interface AsteriskFiveSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskFiveSquare: DefineComponent<AsteriskFiveSquareProps>;

export default AsteriskFiveSquare;
export { AsteriskFiveSquare };
