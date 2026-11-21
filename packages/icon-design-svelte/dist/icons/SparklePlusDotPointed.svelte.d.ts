import { SvelteComponent } from 'svelte';

export interface SparklePlusDotPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparklePlusDotPointed extends SvelteComponent<SparklePlusDotPointedProps> {}
