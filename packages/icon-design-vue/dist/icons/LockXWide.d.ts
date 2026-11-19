import type { DefineComponent } from 'vue';

export interface LockXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockXWide: DefineComponent<LockXWideProps>;

export default LockXWide;
export { LockXWide };
