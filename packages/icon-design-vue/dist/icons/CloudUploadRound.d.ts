import type { DefineComponent } from 'vue';

export interface CloudUploadRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadRound: DefineComponent<CloudUploadRoundProps>;

export default CloudUploadRound;
export { CloudUploadRound };
