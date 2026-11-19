import type { DefineComponent } from 'vue';

export interface CapsLockOffFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CapsLockOffFlat: DefineComponent<CapsLockOffFlatProps>;

export default CapsLockOffFlat;
export { CapsLockOffFlat };
