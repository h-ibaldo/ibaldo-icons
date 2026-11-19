import type { DefineComponent } from 'vue';

export interface HeartAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartAngular: DefineComponent<HeartAngularProps>;

export default HeartAngular;
export { HeartAngular };
