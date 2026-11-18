import { SvelteComponent } from 'svelte';

export interface PauseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PauseCircle extends SvelteComponent<PauseCircleProps> {}
