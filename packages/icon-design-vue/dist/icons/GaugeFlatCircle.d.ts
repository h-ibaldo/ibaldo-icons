import type { DefineComponent } from 'vue';

export interface GaugeFlatCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeFlatCircle: DefineComponent<GaugeFlatCircleProps>;

export default GaugeFlatCircle;
export { GaugeFlatCircle };
