import { SvelteComponent } from 'svelte';

export interface PauseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Pause extends SvelteComponent<PauseProps> {}
