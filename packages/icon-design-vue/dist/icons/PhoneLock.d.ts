import type { DefineComponent } from 'vue';

export interface PhoneLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneLock: DefineComponent<PhoneLockProps>;

export default PhoneLock;
export { PhoneLock };
