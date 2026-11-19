import type { DefineComponent } from 'vue';

export interface BriefcasePocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcasePocket: DefineComponent<BriefcasePocketProps>;

export default BriefcasePocket;
export { BriefcasePocket };
