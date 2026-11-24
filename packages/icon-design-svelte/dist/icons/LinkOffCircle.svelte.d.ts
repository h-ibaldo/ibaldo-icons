import { SvelteComponent } from 'svelte';

export interface LinkOffCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkOffCircle extends SvelteComponent<LinkOffCircleProps> {}
