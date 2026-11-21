import type { DefineComponent } from 'vue';

export interface PhoneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Phone: DefineComponent<PhoneProps>;

export default Phone;
export { Phone };
