import type { DefineComponent } from 'vue';

export interface LockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockWide: DefineComponent<LockWideProps>;

export default LockWide;
export { LockWide };
