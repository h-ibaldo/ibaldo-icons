import { SvelteComponent } from 'svelte';

export interface UploadDashed1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadDashed1 extends SvelteComponent<UploadDashed1Props> {}
