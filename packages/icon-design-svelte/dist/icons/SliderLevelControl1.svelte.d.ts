import { SvelteComponent } from 'svelte';

export interface SliderLevelControl1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderLevelControl1 extends SvelteComponent<SliderLevelControl1Props> {}
