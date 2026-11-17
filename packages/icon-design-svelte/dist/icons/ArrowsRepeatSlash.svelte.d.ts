import { SvelteComponent } from 'svelte';

export interface ArrowsRepeatSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsRepeatSlash extends SvelteComponent<ArrowsRepeatSlashProps> {}
