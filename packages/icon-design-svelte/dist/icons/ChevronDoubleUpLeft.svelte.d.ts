import { SvelteComponent } from 'svelte';

export interface ChevronDoubleUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleUpLeft extends SvelteComponent<ChevronDoubleUpLeftProps> {}
