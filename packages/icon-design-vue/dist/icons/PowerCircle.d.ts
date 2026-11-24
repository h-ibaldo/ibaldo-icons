import type { DefineComponent } from 'vue';

export interface PowerCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PowerCircle: DefineComponent<PowerCircleProps>;

export default PowerCircle;
export { PowerCircle };
