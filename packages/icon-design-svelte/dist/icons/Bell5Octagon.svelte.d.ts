import { SvelteComponent } from 'svelte';

export interface Bell5OctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Octagon extends SvelteComponent<Bell5OctagonProps> {}
