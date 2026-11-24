import { SvelteComponent } from 'svelte';

export interface ScissorsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scissors extends SvelteComponent<ScissorsProps> {}
