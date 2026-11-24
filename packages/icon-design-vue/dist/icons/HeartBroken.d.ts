import type { DefineComponent } from 'vue';

export interface HeartBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartBroken: DefineComponent<HeartBrokenProps>;

export default HeartBroken;
export { HeartBroken };
