import type { DefineComponent } from 'vue';

export interface UploadTrayStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadTrayStep: DefineComponent<UploadTrayStepProps>;

export default UploadTrayStep;
export { UploadTrayStep };
