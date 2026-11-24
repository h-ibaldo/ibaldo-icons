import type { DefineComponent } from 'vue';

export interface DocumentListCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListCurl: DefineComponent<DocumentListCurlProps>;

export default DocumentListCurl;
export { DocumentListCurl };
