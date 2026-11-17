import { SvelteComponent } from 'svelte';

export interface CloudUpload2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUpload2 extends SvelteComponent<CloudUpload2Props> {}
