import { SvelteComponent } from 'svelte';

export interface PinSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PinSearch2 extends SvelteComponent<PinSearch2Props> {}
