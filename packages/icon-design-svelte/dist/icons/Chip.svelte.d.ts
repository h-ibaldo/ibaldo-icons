import { SvelteComponent } from 'svelte';

export interface ChipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Chip extends SvelteComponent<ChipProps> {}
