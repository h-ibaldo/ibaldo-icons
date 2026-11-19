import type { DefineComponent } from 'vue';

export interface HeartStripedWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartStripedWide: DefineComponent<HeartStripedWideProps>;

export default HeartStripedWide;
export { HeartStripedWide };
