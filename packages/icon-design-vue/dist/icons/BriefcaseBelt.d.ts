import type { DefineComponent } from 'vue';

export interface BriefcaseBeltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseBelt: DefineComponent<BriefcaseBeltProps>;

export default BriefcaseBelt;
export { BriefcaseBelt };
