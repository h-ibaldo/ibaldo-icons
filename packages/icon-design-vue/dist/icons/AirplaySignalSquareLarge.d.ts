import type { DefineComponent } from 'vue';

export interface AirplaySignalSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplaySignalSquareLarge: DefineComponent<AirplaySignalSquareLargeProps>;

export default AirplaySignalSquareLarge;
export { AirplaySignalSquareLarge };
