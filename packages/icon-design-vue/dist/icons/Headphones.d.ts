import type { DefineComponent } from 'vue';

export interface HeadphonesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Headphones: DefineComponent<HeadphonesProps>;

export default Headphones;
export { Headphones };
