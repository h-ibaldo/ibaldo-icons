import type { DefineComponent } from 'vue';

export interface ClockCloudProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockCloud: DefineComponent<ClockCloudProps>;

export default ClockCloud;
export { ClockCloud };
