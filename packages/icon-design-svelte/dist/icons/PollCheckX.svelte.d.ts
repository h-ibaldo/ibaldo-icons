import { SvelteComponent } from 'svelte';

export interface PollCheckXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollCheckX extends SvelteComponent<PollCheckXProps> {}
