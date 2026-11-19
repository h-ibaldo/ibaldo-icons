import type { DefineComponent } from 'vue';

export interface ClockMinusTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockMinusTop: DefineComponent<ClockMinusTopProps>;

export default ClockMinusTop;
export { ClockMinusTop };
