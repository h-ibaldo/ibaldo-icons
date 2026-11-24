import type { DefineComponent } from 'vue';

export interface ScanEyeLidProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanEyeLid: DefineComponent<ScanEyeLidProps>;

export default ScanEyeLid;
export { ScanEyeLid };
