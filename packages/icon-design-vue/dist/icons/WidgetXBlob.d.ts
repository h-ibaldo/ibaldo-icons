import type { DefineComponent } from 'vue';

export interface WidgetXBlobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetXBlob: DefineComponent<WidgetXBlobProps>;

export default WidgetXBlob;
export { WidgetXBlob };
