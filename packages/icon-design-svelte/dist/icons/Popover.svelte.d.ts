import { SvelteComponent } from 'svelte';

export interface PopoverProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Popover extends SvelteComponent<PopoverProps> {}
