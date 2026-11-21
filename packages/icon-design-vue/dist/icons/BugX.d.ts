import type { DefineComponent } from 'vue';

export interface BugXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BugX: DefineComponent<BugXProps>;

export default BugX;
export { BugX };
