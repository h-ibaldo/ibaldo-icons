import type { DefineComponent } from 'vue';

export interface HeartPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartPlus: DefineComponent<HeartPlusProps>;

export default HeartPlus;
export { HeartPlus };
