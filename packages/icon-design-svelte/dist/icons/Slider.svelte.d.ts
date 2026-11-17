import { SvelteComponent } from 'svelte';

export interface SliderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Slider extends SvelteComponent<SliderProps> {}
