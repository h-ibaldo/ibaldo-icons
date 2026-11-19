import type { DefineComponent } from 'vue';

export interface AirplayTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplayTall: DefineComponent<AirplayTallProps>;

export default AirplayTall;
export { AirplayTall };
