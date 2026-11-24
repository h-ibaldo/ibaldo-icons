import type { DefineComponent } from 'vue';

export interface VpnLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VpnLines: DefineComponent<VpnLinesProps>;

export default VpnLines;
export { VpnLines };
