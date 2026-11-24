import type { DefineComponent } from 'vue';

export interface HeartBrokenWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartBrokenWide: DefineComponent<HeartBrokenWideProps>;

export default HeartBrokenWide;
export { HeartBrokenWide };
