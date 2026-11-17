import { SvelteComponent } from 'svelte';

export interface PlayCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlayCircle extends SvelteComponent<PlayCircleProps> {}
