import type { DefineComponent } from 'vue';

export interface PhoneHashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneHash: DefineComponent<PhoneHashProps>;

export default PhoneHash;
export { PhoneHash };
