import { SvelteComponent } from 'svelte';

export interface OpenInWindowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenInWindowUp extends SvelteComponent<OpenInWindowUpProps> {}
