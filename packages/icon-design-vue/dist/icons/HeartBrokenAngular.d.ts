import type { DefineComponent } from 'vue';

export interface HeartBrokenAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartBrokenAngular: DefineComponent<HeartBrokenAngularProps>;

export default HeartBrokenAngular;
export { HeartBrokenAngular };
