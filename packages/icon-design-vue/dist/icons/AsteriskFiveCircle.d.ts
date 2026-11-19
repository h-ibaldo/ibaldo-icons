import type { DefineComponent } from 'vue';

export interface AsteriskFiveCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskFiveCircle: DefineComponent<AsteriskFiveCircleProps>;

export default AsteriskFiveCircle;
export { AsteriskFiveCircle };
