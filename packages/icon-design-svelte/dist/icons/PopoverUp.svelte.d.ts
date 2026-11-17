import { SvelteComponent } from 'svelte';

export interface PopoverUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverUp extends SvelteComponent<PopoverUpProps> {}
