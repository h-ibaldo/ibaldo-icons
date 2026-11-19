import type { DefineComponent } from 'vue';

export interface DocumentStackShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentStackShadow: DefineComponent<DocumentStackShadowProps>;

export default DocumentStackShadow;
export { DocumentStackShadow };
