import { SvelteComponent } from 'svelte';

export interface PencilDetailedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilDetailed extends SvelteComponent<PencilDetailedProps> {}
