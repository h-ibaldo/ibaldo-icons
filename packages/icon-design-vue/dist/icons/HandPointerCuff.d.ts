import type { DefineComponent } from 'vue';

export interface HandPointerCuffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPointerCuff: DefineComponent<HandPointerCuffProps>;

export default HandPointerCuff;
export { HandPointerCuff };
