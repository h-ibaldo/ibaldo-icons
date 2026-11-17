import { SvelteComponent } from 'svelte';

export interface UploadDashed2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadDashed2 extends SvelteComponent<UploadDashed2Props> {}
