import type { DefineComponent } from 'vue';

export interface HeartStripedAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartStripedAngular: DefineComponent<HeartStripedAngularProps>;

export default HeartStripedAngular;
export { HeartStripedAngular };
