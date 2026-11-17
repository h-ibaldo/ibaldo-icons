import { SvelteComponent } from 'svelte';

export interface PinSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PinSearch extends SvelteComponent<PinSearchProps> {}
