import type { DefineComponent } from 'vue';

export interface HeadphonesXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeadphonesX: DefineComponent<HeadphonesXProps>;

export default HeadphonesX;
export { HeadphonesX };
