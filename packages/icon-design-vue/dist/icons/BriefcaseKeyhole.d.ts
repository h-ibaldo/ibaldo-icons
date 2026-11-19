import type { DefineComponent } from 'vue';

export interface BriefcaseKeyholeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseKeyhole: DefineComponent<BriefcaseKeyholeProps>;

export default BriefcaseKeyhole;
export { BriefcaseKeyhole };
