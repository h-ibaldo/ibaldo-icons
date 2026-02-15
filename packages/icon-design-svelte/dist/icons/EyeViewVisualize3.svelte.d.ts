import { SvelteComponent } from 'svelte';

export interface EyeViewVisualize3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeViewVisualize3 extends SvelteComponent<EyeViewVisualize3Props> {}
