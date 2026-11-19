import { SvelteComponent } from 'svelte';

export interface CropMarksThreeLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropMarksThreeLines extends SvelteComponent<CropMarksThreeLinesProps> {}
