import { SvelteComponent } from 'svelte';

export interface AlignCenterHorizontalSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignCenterHorizontalSplit extends SvelteComponent<AlignCenterHorizontalSplitProps> {}
