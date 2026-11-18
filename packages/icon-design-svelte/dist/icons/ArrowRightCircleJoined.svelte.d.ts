import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircleJoined extends SvelteComponent<ArrowRightCircleJoinedProps> {}
