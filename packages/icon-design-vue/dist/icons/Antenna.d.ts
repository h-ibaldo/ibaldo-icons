import type { DefineComponent } from 'vue';

export interface AntennaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Antenna: DefineComponent<AntennaProps>;

export default Antenna;
export { Antenna };
