import { SvelteComponent } from 'svelte';

export interface Bell2OctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Octagon extends SvelteComponent<Bell2OctagonProps> {}
