import { SvelteComponent } from 'svelte';

export interface UploadArrowBox2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowBox2 extends SvelteComponent<UploadArrowBox2Props> {}
