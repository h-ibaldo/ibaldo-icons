import { SvelteComponent } from 'svelte';

export interface UploadFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadFlat extends SvelteComponent<UploadFlatProps> {}
