import { SvelteComponent } from 'svelte';

export interface UploadArrowBox3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowBox3 extends SvelteComponent<UploadArrowBox3Props> {}
