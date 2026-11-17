import { SvelteComponent } from 'svelte';

export interface AtSign3CircleDotsMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3CircleDotsMenu extends SvelteComponent<AtSign3CircleDotsMenuProps> {}
