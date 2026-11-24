import type { DefineComponent } from 'vue';

export interface LockDotsDashWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockDotsDashWide: DefineComponent<LockDotsDashWideProps>;

export default LockDotsDashWide;
export { LockDotsDashWide };
