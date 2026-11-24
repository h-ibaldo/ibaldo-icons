import { SvelteComponent } from 'svelte';

export interface MailOpenUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailOpenUpload extends SvelteComponent<MailOpenUploadProps> {}
