import type { DefineComponent } from 'vue';

export interface BriefcaseSatchelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseSatchel: DefineComponent<BriefcaseSatchelProps>;

export default BriefcaseSatchel;
export { BriefcaseSatchel };
