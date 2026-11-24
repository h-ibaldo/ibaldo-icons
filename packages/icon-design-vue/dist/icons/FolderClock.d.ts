import type { DefineComponent } from 'vue';

export interface FolderClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderClock: DefineComponent<FolderClockProps>;

export default FolderClock;
export { FolderClock };
