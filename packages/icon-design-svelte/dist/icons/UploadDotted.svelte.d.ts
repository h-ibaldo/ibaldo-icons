import { SvelteComponent } from 'svelte';

export interface UploadDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadDotted extends SvelteComponent<UploadDottedProps> {}
