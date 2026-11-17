import { SvelteComponent } from 'svelte';

export interface PencilUnderlineDetailedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderlineDetailed extends SvelteComponent<PencilUnderlineDetailedProps> {}
