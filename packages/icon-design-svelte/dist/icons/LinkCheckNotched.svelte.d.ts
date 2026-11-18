import { SvelteComponent } from 'svelte';

export interface LinkCheckNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckNotched extends SvelteComponent<LinkCheckNotchedProps> {}
