import type { DefineComponent } from 'vue';

export interface VpnProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Vpn: DefineComponent<VpnProps>;

export default Vpn;
export { Vpn };
