import type { DefineComponent } from 'vue';

export interface PhonePauseSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhonePauseSharp: DefineComponent<PhonePauseSharpProps>;

export default PhonePauseSharp;
export { PhonePauseSharp };
