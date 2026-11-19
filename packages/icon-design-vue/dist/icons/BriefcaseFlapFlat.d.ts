import type { DefineComponent } from 'vue';

export interface BriefcaseFlapFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapFlat: DefineComponent<BriefcaseFlapFlatProps>;

export default BriefcaseFlapFlat;
export { BriefcaseFlapFlat };
