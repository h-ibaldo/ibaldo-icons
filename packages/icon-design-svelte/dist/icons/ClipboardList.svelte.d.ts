import { SvelteComponent } from 'svelte';

export interface ClipboardListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardList extends SvelteComponent<ClipboardListProps> {}
