import type { DefineComponent } from 'vue';

export interface SignalBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SignalBars: DefineComponent<SignalBarsProps>;

export default SignalBars;
export { SignalBars };
