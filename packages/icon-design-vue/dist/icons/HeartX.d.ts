import type { DefineComponent } from 'vue';

export interface HeartXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartX: DefineComponent<HeartXProps>;

export default HeartX;
export { HeartX };
