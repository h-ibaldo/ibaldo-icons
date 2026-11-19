import type { DefineComponent } from 'vue';

export interface ClockTicksSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTicksSquared: DefineComponent<ClockTicksSquaredProps>;

export default ClockTicksSquared;
export { ClockTicksSquared };
