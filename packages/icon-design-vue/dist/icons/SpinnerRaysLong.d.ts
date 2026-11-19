import type { DefineComponent } from 'vue';

export interface SpinnerRaysLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysLong: DefineComponent<SpinnerRaysLongProps>;

export default SpinnerRaysLong;
export { SpinnerRaysLong };
