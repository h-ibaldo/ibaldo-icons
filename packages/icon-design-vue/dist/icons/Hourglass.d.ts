import type { DefineComponent } from 'vue';

export interface HourglassProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Hourglass: DefineComponent<HourglassProps>;

export default Hourglass;
export { Hourglass };
