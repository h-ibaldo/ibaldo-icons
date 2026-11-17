import { SvelteComponent } from 'svelte';

export interface SliderPointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderPointer extends SvelteComponent<SliderPointerProps> {}
