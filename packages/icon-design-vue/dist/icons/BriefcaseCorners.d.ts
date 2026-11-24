import type { DefineComponent } from 'vue';

export interface BriefcaseCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseCorners: DefineComponent<BriefcaseCornersProps>;

export default BriefcaseCorners;
export { BriefcaseCorners };
