import { SvelteComponent } from 'svelte';

export interface RocketUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RocketUp extends SvelteComponent<RocketUpProps> {}
