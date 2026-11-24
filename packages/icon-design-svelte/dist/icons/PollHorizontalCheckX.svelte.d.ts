import { SvelteComponent } from 'svelte';

export interface PollHorizontalCheckXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollHorizontalCheckX extends SvelteComponent<PollHorizontalCheckXProps> {}
