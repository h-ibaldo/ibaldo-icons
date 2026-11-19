import type { DefineComponent } from 'vue';

export interface DivideCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DivideCircle: DefineComponent<DivideCircleProps>;

export default DivideCircle;
export { DivideCircle };
