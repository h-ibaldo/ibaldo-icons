import { SvelteComponent } from 'svelte';

export interface ProportionsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Proportions extends SvelteComponent<ProportionsProps> {}
