import { SvelteComponent } from 'svelte';

export interface ChevronUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUp extends SvelteComponent<ChevronUpProps> {}
