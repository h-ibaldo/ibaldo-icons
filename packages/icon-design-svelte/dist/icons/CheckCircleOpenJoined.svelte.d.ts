import { SvelteComponent } from 'svelte';

export interface CheckCircleOpenJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleOpenJoined extends SvelteComponent<CheckCircleOpenJoinedProps> {}
