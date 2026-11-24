import { SvelteComponent } from 'svelte';

export interface KeypadJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeypadJoined extends SvelteComponent<KeypadJoinedProps> {}
