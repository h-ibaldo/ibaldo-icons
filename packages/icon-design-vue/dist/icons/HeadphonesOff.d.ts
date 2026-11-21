import type { DefineComponent } from 'vue';

export interface HeadphonesOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeadphonesOff: DefineComponent<HeadphonesOffProps>;

export default HeadphonesOff;
export { HeadphonesOff };
