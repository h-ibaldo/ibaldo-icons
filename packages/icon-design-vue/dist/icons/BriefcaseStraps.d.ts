import type { DefineComponent } from 'vue';

export interface BriefcaseStrapsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseStraps: DefineComponent<BriefcaseStrapsProps>;

export default BriefcaseStraps;
export { BriefcaseStraps };
