import { SvelteComponent } from 'svelte';

export interface CheckDoubleJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckDoubleJoined extends SvelteComponent<CheckDoubleJoinedProps> {}
