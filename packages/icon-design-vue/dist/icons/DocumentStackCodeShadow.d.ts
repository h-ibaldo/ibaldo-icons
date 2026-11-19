import type { DefineComponent } from 'vue';

export interface DocumentStackCodeShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentStackCodeShadow: DefineComponent<DocumentStackCodeShadowProps>;

export default DocumentStackCodeShadow;
export { DocumentStackCodeShadow };
