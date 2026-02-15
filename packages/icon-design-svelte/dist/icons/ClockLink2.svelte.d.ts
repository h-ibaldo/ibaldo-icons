import { SvelteComponent } from 'svelte';

export interface ClockLink2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockLink2 extends SvelteComponent<ClockLink2Props> {}
