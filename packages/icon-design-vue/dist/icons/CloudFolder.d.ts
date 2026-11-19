import type { DefineComponent } from 'vue';

export interface CloudFolderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudFolder: DefineComponent<CloudFolderProps>;

export default CloudFolder;
export { CloudFolder };
