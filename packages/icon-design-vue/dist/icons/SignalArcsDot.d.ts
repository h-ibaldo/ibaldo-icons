import type { DefineComponent } from 'vue';

export interface SignalArcsDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SignalArcsDot: DefineComponent<SignalArcsDotProps>;

export default SignalArcsDot;
export { SignalArcsDot };
