import type { DefineComponent } from 'vue';

export interface HeartXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartXWide: DefineComponent<HeartXWideProps>;

export default HeartXWide;
export { HeartXWide };
