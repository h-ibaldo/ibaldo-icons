import { SvelteComponent } from 'svelte';

export interface CloudUpload1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUpload1 extends SvelteComponent<CloudUpload1Props> {}
