import { SvelteComponent } from 'svelte';

export interface TrashEmptyPeakProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashEmptyPeak extends SvelteComponent<TrashEmptyPeakProps> {}
