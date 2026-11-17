import { SvelteComponent } from 'svelte';

export interface BoxTapeLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxTapeLabel extends SvelteComponent<BoxTapeLabelProps> {}
