import type { DefineComponent } from 'vue';

export interface SpinnerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Spinner: DefineComponent<SpinnerProps>;

export default Spinner;
export { Spinner };
