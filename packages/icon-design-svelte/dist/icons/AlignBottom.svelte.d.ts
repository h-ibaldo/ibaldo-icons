import { SvelteComponent } from 'svelte';

export interface AlignBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignBottom extends SvelteComponent<AlignBottomProps> {}
