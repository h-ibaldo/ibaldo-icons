import type { DefineComponent } from 'vue';

export interface CloudUploadLargeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadLargeRound: DefineComponent<CloudUploadLargeRoundProps>;

export default CloudUploadLargeRound;
export { CloudUploadLargeRound };
