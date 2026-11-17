import { SvelteComponent } from 'svelte';

export interface UploadArrow2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrow2 extends SvelteComponent<UploadArrow2Props> {}
