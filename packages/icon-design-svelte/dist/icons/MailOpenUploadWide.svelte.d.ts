import { SvelteComponent } from 'svelte';

export interface MailOpenUploadWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailOpenUploadWide extends SvelteComponent<MailOpenUploadWideProps> {}
