import type { DefineComponent } from 'vue';

export interface ClockSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSquared: DefineComponent<ClockSquaredProps>;

export default ClockSquared;
export { ClockSquared };
