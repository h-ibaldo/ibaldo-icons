import { SvelteComponent } from 'svelte';

export interface TrashArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUp extends SvelteComponent<TrashArrowUpProps> {}
