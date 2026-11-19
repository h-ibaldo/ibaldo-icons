import type { DefineComponent } from 'vue';

export interface LockCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckWide: DefineComponent<LockCheckWideProps>;

export default LockCheckWide;
export { LockCheckWide };
