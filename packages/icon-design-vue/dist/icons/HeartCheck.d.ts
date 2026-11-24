import type { DefineComponent } from 'vue';

export interface HeartCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartCheck: DefineComponent<HeartCheckProps>;

export default HeartCheck;
export { HeartCheck };
