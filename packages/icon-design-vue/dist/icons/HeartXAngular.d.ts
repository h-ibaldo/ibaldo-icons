import type { DefineComponent } from 'vue';

export interface HeartXAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartXAngular: DefineComponent<HeartXAngularProps>;

export default HeartXAngular;
export { HeartXAngular };
