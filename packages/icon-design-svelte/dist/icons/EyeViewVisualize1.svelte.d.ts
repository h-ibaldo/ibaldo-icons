import { SvelteComponent } from 'svelte';

export interface EyeViewVisualize1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeViewVisualize1 extends SvelteComponent<EyeViewVisualize1Props> {}
