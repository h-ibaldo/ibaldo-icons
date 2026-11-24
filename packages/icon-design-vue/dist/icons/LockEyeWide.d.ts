import type { DefineComponent } from 'vue';

export interface LockEyeWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEyeWide: DefineComponent<LockEyeWideProps>;

export default LockEyeWide;
export { LockEyeWide };
