import type { DefineComponent } from 'vue';

export interface ScrewdriverProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Screwdriver: DefineComponent<ScrewdriverProps>;

export default Screwdriver;
export { Screwdriver };
