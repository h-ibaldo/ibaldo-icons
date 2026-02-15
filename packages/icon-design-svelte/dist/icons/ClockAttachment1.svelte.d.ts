import { SvelteComponent } from 'svelte';

export interface ClockAttachment1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockAttachment1 extends SvelteComponent<ClockAttachment1Props> {}
