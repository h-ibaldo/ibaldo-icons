import type { DefineComponent } from 'vue';

export interface AirplaySignalCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplaySignalCircle: DefineComponent<AirplaySignalCircleProps>;

export default AirplaySignalCircle;
export { AirplaySignalCircle };
