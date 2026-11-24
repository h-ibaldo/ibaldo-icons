import type { DefineComponent } from 'vue';

export interface LockDotsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockDotsWide: DefineComponent<LockDotsWideProps>;

export default LockDotsWide;
export { LockDotsWide };
