import type { DefineComponent } from 'vue';

export interface DocumentHeartLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentHeartLarge: DefineComponent<DocumentHeartLargeProps>;

export default DocumentHeartLarge;
export { DocumentHeartLarge };
