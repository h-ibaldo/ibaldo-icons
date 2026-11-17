import { SvelteComponent } from 'svelte';

export interface PopoverListUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverListUp extends SvelteComponent<PopoverListUpProps> {}
