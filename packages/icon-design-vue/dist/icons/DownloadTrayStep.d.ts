import type { DefineComponent } from 'vue';

export interface DownloadTrayStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadTrayStep: DefineComponent<DownloadTrayStepProps>;

export default DownloadTrayStep;
export { DownloadTrayStep };
