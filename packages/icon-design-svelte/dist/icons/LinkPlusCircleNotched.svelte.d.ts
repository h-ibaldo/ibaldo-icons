import { SvelteComponent } from 'svelte';

export interface LinkPlusCircleNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCircleNotched extends SvelteComponent<LinkPlusCircleNotchedProps> {}
