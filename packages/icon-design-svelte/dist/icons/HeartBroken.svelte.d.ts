import { SvelteComponent } from 'svelte';

export interface HeartBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartBroken extends SvelteComponent<HeartBrokenProps> {}
