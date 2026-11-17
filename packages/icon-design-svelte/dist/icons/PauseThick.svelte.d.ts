import { SvelteComponent } from 'svelte';

export interface PauseThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PauseThick extends SvelteComponent<PauseThickProps> {}
