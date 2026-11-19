import type { DefineComponent } from 'vue';

export interface SignalBarsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SignalBarsSquare: DefineComponent<SignalBarsSquareProps>;

export default SignalBarsSquare;
export { SignalBarsSquare };
