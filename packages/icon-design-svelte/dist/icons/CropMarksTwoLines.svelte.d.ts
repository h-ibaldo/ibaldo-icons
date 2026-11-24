import { SvelteComponent } from 'svelte';

export interface CropMarksTwoLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropMarksTwoLines extends SvelteComponent<CropMarksTwoLinesProps> {}
