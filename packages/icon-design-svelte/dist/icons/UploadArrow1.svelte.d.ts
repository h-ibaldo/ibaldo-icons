import { SvelteComponent } from 'svelte';

export interface UploadArrow1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrow1 extends SvelteComponent<UploadArrow1Props> {}
