import type { DefineComponent } from 'vue';

export interface AirplayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Airplay: DefineComponent<AirplayProps>;

export default Airplay;
export { Airplay };
