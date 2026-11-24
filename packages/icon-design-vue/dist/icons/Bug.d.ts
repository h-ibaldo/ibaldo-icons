import type { DefineComponent } from 'vue';

export interface BugProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bug: DefineComponent<BugProps>;

export default Bug;
export { Bug };
