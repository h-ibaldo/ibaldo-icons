import type { DefineComponent } from 'vue';

export interface BugPlayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BugPlay: DefineComponent<BugPlayProps>;

export default BugPlay;
export { BugPlay };
