import type { DefineComponent } from 'vue';

export interface PhoneXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneX: DefineComponent<PhoneXProps>;

export default PhoneX;
export { PhoneX };
