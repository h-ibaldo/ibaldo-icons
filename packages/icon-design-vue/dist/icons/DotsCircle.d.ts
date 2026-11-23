import type { DefineComponent } from 'vue';

export interface DotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DotsCircle: DefineComponent<DotsCircleProps>;

export default DotsCircle;
export { DotsCircle };
