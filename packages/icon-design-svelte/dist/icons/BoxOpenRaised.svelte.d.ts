import { SvelteComponent } from 'svelte';

export interface BoxOpenRaisedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxOpenRaised extends SvelteComponent<BoxOpenRaisedProps> {}
