import { SvelteComponent } from 'svelte';

export interface BrowserUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserUpload extends SvelteComponent<BrowserUploadProps> {}
