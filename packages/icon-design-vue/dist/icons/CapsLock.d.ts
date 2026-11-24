import type { DefineComponent } from 'vue';

export interface CapsLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CapsLock: DefineComponent<CapsLockProps>;

export default CapsLock;
export { CapsLock };
