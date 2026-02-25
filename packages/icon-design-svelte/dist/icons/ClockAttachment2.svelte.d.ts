import { SvelteComponent } from 'svelte';

export interface ClockAttachment2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockAttachment2 extends SvelteComponent<ClockAttachment2Props> {}
