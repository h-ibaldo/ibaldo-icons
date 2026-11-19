import type { DefineComponent } from 'vue';

export interface AirplaySignalLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplaySignalLarge: DefineComponent<AirplaySignalLargeProps>;

export default AirplaySignalLarge;
export { AirplaySignalLarge };
