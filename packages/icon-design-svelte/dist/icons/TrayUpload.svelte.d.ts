import { SvelteComponent } from 'svelte';

export interface TrayUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayUpload extends SvelteComponent<TrayUploadProps> {}
