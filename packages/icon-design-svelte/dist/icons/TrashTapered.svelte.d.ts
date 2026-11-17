import { SvelteComponent } from 'svelte';

export interface TrashTaperedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashTapered extends SvelteComponent<TrashTaperedProps> {}
