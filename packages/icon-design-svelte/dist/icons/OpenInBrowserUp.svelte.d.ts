import { SvelteComponent } from 'svelte';

export interface OpenInBrowserUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenInBrowserUp extends SvelteComponent<OpenInBrowserUpProps> {}
