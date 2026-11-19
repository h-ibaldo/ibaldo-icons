import type { DefineComponent } from 'vue';

export interface BorderAllProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderAll: DefineComponent<BorderAllProps>;

export default BorderAll;
export { BorderAll };
