import { SvelteComponent } from 'svelte';

export interface PencilAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilAngular extends SvelteComponent<PencilAngularProps> {}
