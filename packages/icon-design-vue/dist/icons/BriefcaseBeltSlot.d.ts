import type { DefineComponent } from 'vue';

export interface BriefcaseBeltSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseBeltSlot: DefineComponent<BriefcaseBeltSlotProps>;

export default BriefcaseBeltSlot;
export { BriefcaseBeltSlot };
