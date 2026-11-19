import type { DefineComponent } from 'vue';

export interface AirplaySignalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplaySignal: DefineComponent<AirplaySignalProps>;

export default AirplaySignal;
export { AirplaySignal };
