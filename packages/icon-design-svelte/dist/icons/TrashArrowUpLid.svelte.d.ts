import { SvelteComponent } from 'svelte';

export interface TrashArrowUpLidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUpLid extends SvelteComponent<TrashArrowUpLidProps> {}
