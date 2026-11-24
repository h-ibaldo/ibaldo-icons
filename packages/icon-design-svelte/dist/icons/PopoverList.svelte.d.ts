import { SvelteComponent } from 'svelte';

export interface PopoverListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverList extends SvelteComponent<PopoverListProps> {}
