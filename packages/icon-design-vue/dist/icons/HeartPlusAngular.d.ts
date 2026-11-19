import type { DefineComponent } from 'vue';

export interface HeartPlusAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartPlusAngular: DefineComponent<HeartPlusAngularProps>;

export default HeartPlusAngular;
export { HeartPlusAngular };
