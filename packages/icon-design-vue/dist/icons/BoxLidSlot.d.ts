import type { DefineComponent } from 'vue';

export interface BoxLidSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxLidSlot: DefineComponent<BoxLidSlotProps>;

export default BoxLidSlot;
export { BoxLidSlot };
