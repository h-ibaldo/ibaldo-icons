import type { DefineComponent } from 'vue';

export interface DocumentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Document: DefineComponent<DocumentProps>;

export default Document;
export { Document };
