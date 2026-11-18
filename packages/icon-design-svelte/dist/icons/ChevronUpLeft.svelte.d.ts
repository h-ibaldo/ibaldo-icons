import { SvelteComponent } from 'svelte';

export interface ChevronUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpLeft extends SvelteComponent<ChevronUpLeftProps> {}
