import { SvelteComponent } from 'svelte';

export interface EyeViewVisualize5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeViewVisualize5 extends SvelteComponent<EyeViewVisualize5Props> {}
