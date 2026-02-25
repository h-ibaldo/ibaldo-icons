import { SvelteComponent } from 'svelte';

export interface EyeViewVisualize2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeViewVisualize2 extends SvelteComponent<EyeViewVisualize2Props> {}
