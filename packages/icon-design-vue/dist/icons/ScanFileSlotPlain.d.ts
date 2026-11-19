import type { DefineComponent } from 'vue';

export interface ScanFileSlotPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFileSlotPlain: DefineComponent<ScanFileSlotPlainProps>;

export default ScanFileSlotPlain;
export { ScanFileSlotPlain };
