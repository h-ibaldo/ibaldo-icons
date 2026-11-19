import type { DefineComponent } from 'vue';

export interface BriefcaseStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseStriped: DefineComponent<BriefcaseStripedProps>;

export default BriefcaseStriped;
export { BriefcaseStriped };
