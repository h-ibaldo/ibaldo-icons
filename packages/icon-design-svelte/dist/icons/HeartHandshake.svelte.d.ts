import { SvelteComponent } from 'svelte';

export interface HeartHandshakeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartHandshake extends SvelteComponent<HeartHandshakeProps> {}
