import type { DefineComponent } from 'vue';

export interface AsteriskCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskCircle: DefineComponent<AsteriskCircleProps>;

export default AsteriskCircle;
export { AsteriskCircle };
