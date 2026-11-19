import type { DefineComponent } from 'vue';

export interface AirplayPairProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplayPair: DefineComponent<AirplayPairProps>;

export default AirplayPair;
export { AirplayPair };
