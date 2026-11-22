import { SvelteComponent } from 'svelte';

export interface FolderClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderClock extends SvelteComponent<FolderClockProps> {}
