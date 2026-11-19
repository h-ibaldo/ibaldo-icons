import type { DefineComponent } from 'vue';

export interface HeartPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartPlusWide: DefineComponent<HeartPlusWideProps>;

export default HeartPlusWide;
export { HeartPlusWide };
