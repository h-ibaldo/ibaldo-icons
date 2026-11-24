import type { DefineComponent } from 'vue';

export interface SaveClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveClock: DefineComponent<SaveClockProps>;

export default SaveClock;
export { SaveClock };
