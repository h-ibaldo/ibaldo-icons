import type { DefineComponent } from 'vue';

export interface BugOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BugOff: DefineComponent<BugOffProps>;

export default BugOff;
export { BugOff };
