import { SvelteComponent } from 'svelte';

export interface SliderLevel2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderLevel2 extends SvelteComponent<SliderLevel2Props> {}
