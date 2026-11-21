import type { DefineComponent } from 'vue';

export interface PowerOffCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PowerOffCircle: DefineComponent<PowerOffCircleProps>;

export default PowerOffCircle;
export { PowerOffCircle };
