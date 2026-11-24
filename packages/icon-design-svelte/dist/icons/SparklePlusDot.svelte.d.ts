import { SvelteComponent } from 'svelte';

export interface SparklePlusDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparklePlusDot extends SvelteComponent<SparklePlusDotProps> {}
