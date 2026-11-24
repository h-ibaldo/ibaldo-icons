import type { DefineComponent } from 'vue';

export interface CloudFolderRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudFolderRound: DefineComponent<CloudFolderRoundProps>;

export default CloudFolderRound;
export { CloudFolderRound };
