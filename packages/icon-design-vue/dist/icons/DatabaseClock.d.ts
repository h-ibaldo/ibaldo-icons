import type { DefineComponent } from 'vue';

export interface DatabaseClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseClock: DefineComponent<DatabaseClockProps>;

export default DatabaseClock;
export { DatabaseClock };
