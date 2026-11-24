import { SvelteComponent } from 'svelte';

export interface WatchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Watch extends SvelteComponent<WatchProps> {}
