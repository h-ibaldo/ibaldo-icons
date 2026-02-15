import { SvelteComponent } from 'svelte';

export interface SliderLevelControl2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderLevelControl2 extends SvelteComponent<SliderLevelControl2Props> {}
