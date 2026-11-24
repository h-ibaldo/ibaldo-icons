import type { DefineComponent } from 'vue';

export interface BriefcaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Briefcase: DefineComponent<BriefcaseProps>;

export default Briefcase;
export { Briefcase };
