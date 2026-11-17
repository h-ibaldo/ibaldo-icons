import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleNotched extends SvelteComponent<LinkMinusCircleNotchedProps> {}
