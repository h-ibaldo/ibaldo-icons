import { SvelteComponent } from 'svelte';

export interface RocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Rocket extends SvelteComponent<RocketProps> {}
