import type { DefineComponent } from 'vue';

export interface BoxPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxPlus: DefineComponent<BoxPlusProps>;

export default BoxPlus;
export { BoxPlus };
