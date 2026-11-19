import type { DefineComponent } from 'vue';

export interface ClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Clock: DefineComponent<ClockProps>;

export default Clock;
export { Clock };
