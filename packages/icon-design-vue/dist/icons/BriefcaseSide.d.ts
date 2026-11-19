import type { DefineComponent } from 'vue';

export interface BriefcaseSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseSide: DefineComponent<BriefcaseSideProps>;

export default BriefcaseSide;
export { BriefcaseSide };
