import { SvelteComponent } from 'svelte';

export interface CloudUpload3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUpload3 extends SvelteComponent<CloudUpload3Props> {}
