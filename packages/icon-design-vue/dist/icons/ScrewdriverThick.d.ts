import type { DefineComponent } from 'vue';

export interface ScrewdriverThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScrewdriverThick: DefineComponent<ScrewdriverThickProps>;

export default ScrewdriverThick;
export { ScrewdriverThick };
