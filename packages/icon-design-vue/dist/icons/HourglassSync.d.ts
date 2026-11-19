import type { DefineComponent } from 'vue';

export interface HourglassSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSync: DefineComponent<HourglassSyncProps>;

export default HourglassSync;
export { HourglassSync };
