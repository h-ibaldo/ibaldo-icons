import { SvelteComponent } from 'svelte';

export interface UploadDottedFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadDottedFlat extends SvelteComponent<UploadDottedFlatProps> {}
