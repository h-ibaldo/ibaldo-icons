import { SvelteComponent } from 'svelte';

export interface ClockPencilEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPencilEdit extends SvelteComponent<ClockPencilEditProps> {}
