import type { DefineComponent } from 'vue';

export interface BoxFrontSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontSlot: DefineComponent<BoxFrontSlotProps>;

export default BoxFrontSlot;
export { BoxFrontSlot };
