import type { DefineComponent } from 'vue';

export interface TranslateSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateSync: DefineComponent<TranslateSyncProps>;

export default TranslateSync;
export { TranslateSync };
