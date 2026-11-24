import type { DefineComponent } from 'vue';

export interface SignalArcsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SignalArcs: DefineComponent<SignalArcsProps>;

export default SignalArcs;
export { SignalArcs };
