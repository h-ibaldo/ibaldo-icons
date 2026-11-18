import { SvelteComponent } from 'svelte';

export interface RosetteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Rosette extends SvelteComponent<RosetteProps> {}
