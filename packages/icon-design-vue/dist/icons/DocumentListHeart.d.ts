import type { DefineComponent } from 'vue';

export interface DocumentListHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListHeart: DefineComponent<DocumentListHeartProps>;

export default DocumentListHeart;
export { DocumentListHeart };
