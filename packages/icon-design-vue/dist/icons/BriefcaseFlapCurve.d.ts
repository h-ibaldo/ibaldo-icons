import type { DefineComponent } from 'vue';

export interface BriefcaseFlapCurveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapCurve: DefineComponent<BriefcaseFlapCurveProps>;

export default BriefcaseFlapCurve;
export { BriefcaseFlapCurve };
