import { SvelteComponent } from 'svelte';

export interface SliderLevel4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderLevel4 extends SvelteComponent<SliderLevel4Props> {}
