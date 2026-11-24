import type { DefineComponent } from 'vue';

export interface ClockCheckTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockCheckTop: DefineComponent<ClockCheckTopProps>;

export default ClockCheckTop;
export { ClockCheckTop };
