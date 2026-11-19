import type { DefineComponent } from 'vue';

export interface HeartWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartWide: DefineComponent<HeartWideProps>;

export default HeartWide;
export { HeartWide };
