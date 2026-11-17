import { SvelteComponent } from 'svelte';

export interface LinkPlusNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusNotched extends SvelteComponent<LinkPlusNotchedProps> {}
