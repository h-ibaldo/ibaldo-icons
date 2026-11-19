import type { DefineComponent } from 'vue';

export interface ScanVideoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanVideo: DefineComponent<ScanVideoProps>;

export default ScanVideo;
export { ScanVideo };
