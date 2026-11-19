import type { DefineComponent } from 'vue';

export interface CloudUploadBaseRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadBaseRound: DefineComponent<CloudUploadBaseRoundProps>;

export default CloudUploadBaseRound;
export { CloudUploadBaseRound };
