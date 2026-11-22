import type { DefineComponent } from 'vue';

export interface HeartCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartCheckWide: DefineComponent<HeartCheckWideProps>;

export default HeartCheckWide;
export { HeartCheckWide };
