import type { DefineComponent } from 'vue';

export interface ClockEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockEdit: DefineComponent<ClockEditProps>;

export default ClockEdit;
export { ClockEdit };
