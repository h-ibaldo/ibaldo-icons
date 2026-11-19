import type { DefineComponent } from 'vue';

export interface CapsLockOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CapsLockOff: DefineComponent<CapsLockOffProps>;

export default CapsLockOff;
export { CapsLockOff };
