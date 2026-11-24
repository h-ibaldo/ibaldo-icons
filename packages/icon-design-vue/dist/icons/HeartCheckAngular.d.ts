import type { DefineComponent } from 'vue';

export interface HeartCheckAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartCheckAngular: DefineComponent<HeartCheckAngularProps>;

export default HeartCheckAngular;
export { HeartCheckAngular };
