import type { DefineComponent } from 'vue';

export interface EthernetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Ethernet: DefineComponent<EthernetProps>;

export default Ethernet;
export { Ethernet };
