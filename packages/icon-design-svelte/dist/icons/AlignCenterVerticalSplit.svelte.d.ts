import { SvelteComponent } from 'svelte';

export interface AlignCenterVerticalSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignCenterVerticalSplit extends SvelteComponent<AlignCenterVerticalSplitProps> {}
