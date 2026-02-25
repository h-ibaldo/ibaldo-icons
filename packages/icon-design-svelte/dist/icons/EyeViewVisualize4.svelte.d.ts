import { SvelteComponent } from 'svelte';

export interface EyeViewVisualize4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeViewVisualize4 extends SvelteComponent<EyeViewVisualize4Props> {}
