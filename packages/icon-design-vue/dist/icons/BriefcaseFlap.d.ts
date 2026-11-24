import type { DefineComponent } from 'vue';

export interface BriefcaseFlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlap: DefineComponent<BriefcaseFlapProps>;

export default BriefcaseFlap;
export { BriefcaseFlap };
