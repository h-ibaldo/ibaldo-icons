import { SvelteComponent } from 'svelte';

export interface Text3DSyncChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DSyncChevron extends SvelteComponent<Text3DSyncChevronProps> {}
