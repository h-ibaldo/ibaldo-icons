import type { DefineComponent } from 'vue';

export interface CapsLockFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CapsLockFlat: DefineComponent<CapsLockFlatProps>;

export default CapsLockFlat;
export { CapsLockFlat };
