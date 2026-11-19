import type { DefineComponent } from 'vue';

export interface DocumentHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentHeart: DefineComponent<DocumentHeartProps>;

export default DocumentHeart;
export { DocumentHeart };
