import { SvelteComponent } from 'svelte';

export interface UploadTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadTray extends SvelteComponent<UploadTrayProps> {}
