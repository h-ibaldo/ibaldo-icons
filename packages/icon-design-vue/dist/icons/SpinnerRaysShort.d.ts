import type { DefineComponent } from 'vue';

export interface SpinnerRaysShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysShort: DefineComponent<SpinnerRaysShortProps>;

export default SpinnerRaysShort;
export { SpinnerRaysShort };
