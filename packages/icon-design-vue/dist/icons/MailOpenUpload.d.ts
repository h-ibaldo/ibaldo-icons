import type { DefineComponent } from 'vue';

export interface MailOpenUploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailOpenUpload: DefineComponent<MailOpenUploadProps>;

export default MailOpenUpload;
export { MailOpenUpload };
