import type { DefineComponent } from 'vue';

export interface TranslateSyncCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateSyncCode: DefineComponent<TranslateSyncCodeProps>;

export default TranslateSyncCode;
export { TranslateSyncCode };
