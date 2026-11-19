import type { DefineComponent } from 'vue';

export interface ClockCircleDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockCircleDashed: DefineComponent<ClockCircleDashedProps>;

export default ClockCircleDashed;
export { ClockCircleDashed };
