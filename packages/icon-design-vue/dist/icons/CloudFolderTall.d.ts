import type { DefineComponent } from 'vue';

export interface CloudFolderTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudFolderTall: DefineComponent<CloudFolderTallProps>;

export default CloudFolderTall;
export { CloudFolderTall };
