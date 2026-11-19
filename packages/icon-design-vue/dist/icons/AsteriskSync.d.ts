import type { DefineComponent } from 'vue';

export interface AsteriskSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskSync: DefineComponent<AsteriskSyncProps>;

export default AsteriskSync;
export { AsteriskSync };
