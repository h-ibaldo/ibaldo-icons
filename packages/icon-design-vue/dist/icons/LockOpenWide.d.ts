import type { DefineComponent } from 'vue';

export interface LockOpenWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenWide: DefineComponent<LockOpenWideProps>;

export default LockOpenWide;
export { LockOpenWide };
