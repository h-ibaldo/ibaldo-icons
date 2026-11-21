import type { DefineComponent } from 'vue';

export interface PhonePauseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhonePause: DefineComponent<PhonePauseProps>;

export default PhonePause;
export { PhonePause };
