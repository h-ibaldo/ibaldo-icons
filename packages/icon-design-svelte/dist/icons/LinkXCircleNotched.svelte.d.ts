import { SvelteComponent } from 'svelte';

export interface LinkXCircleNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCircleNotched extends SvelteComponent<LinkXCircleNotchedProps> {}
