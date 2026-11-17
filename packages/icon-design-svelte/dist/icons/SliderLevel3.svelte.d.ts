import { SvelteComponent } from 'svelte';

export interface SliderLevel3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderLevel3 extends SvelteComponent<SliderLevel3Props> {}
