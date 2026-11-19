import type { DefineComponent } from 'vue';

export interface StarStripedWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarStripedWide: DefineComponent<StarStripedWideProps>;

export default StarStripedWide;
export { StarStripedWide };
