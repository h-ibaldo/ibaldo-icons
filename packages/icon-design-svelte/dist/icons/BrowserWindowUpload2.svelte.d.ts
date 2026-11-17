import { SvelteComponent } from 'svelte';

export interface BrowserWindowUpload2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowUpload2 extends SvelteComponent<BrowserWindowUpload2Props> {}
