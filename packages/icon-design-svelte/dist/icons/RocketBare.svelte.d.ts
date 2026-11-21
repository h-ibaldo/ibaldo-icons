import { SvelteComponent } from 'svelte';

export interface RocketBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RocketBare extends SvelteComponent<RocketBareProps> {}
