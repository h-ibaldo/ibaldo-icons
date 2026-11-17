import { SvelteComponent } from 'svelte';

export interface OpenInBrowserUp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenInBrowserUp2 extends SvelteComponent<OpenInBrowserUp2Props> {}
