import type { DefineComponent } from 'vue';

export interface ScanFileSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFileSlot: DefineComponent<ScanFileSlotProps>;

export default ScanFileSlot;
export { ScanFileSlot };
