import { SvelteComponent } from 'svelte';

export interface PollUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollUser extends SvelteComponent<PollUserProps> {}
