import { SvelteComponent } from 'svelte';

export interface CheckSquareOpenJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareOpenJoined extends SvelteComponent<CheckSquareOpenJoinedProps> {}
