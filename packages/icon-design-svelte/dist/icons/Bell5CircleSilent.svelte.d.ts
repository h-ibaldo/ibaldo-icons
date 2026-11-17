import { SvelteComponent } from 'svelte';

export interface Bell5CircleSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5CircleSilent extends SvelteComponent<Bell5CircleSilentProps> {}
