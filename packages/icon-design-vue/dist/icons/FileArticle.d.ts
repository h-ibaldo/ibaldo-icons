import type { DefineComponent } from 'vue';

export interface FileArticleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArticle: DefineComponent<FileArticleProps>;

export default FileArticle;
export { FileArticle };
