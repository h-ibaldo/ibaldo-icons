import type { DefineComponent } from 'vue';

export interface TrayUploadTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayUploadTall: DefineComponent<TrayUploadTallProps>;

export default TrayUploadTall;
export { TrayUploadTall };
