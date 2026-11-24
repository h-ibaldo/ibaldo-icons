import type { DefineComponent } from 'vue';

export interface HeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Heart: DefineComponent<HeartProps>;

export default Heart;
export { Heart };
