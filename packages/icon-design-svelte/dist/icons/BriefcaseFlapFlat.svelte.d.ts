import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapFlat extends SvelteComponent<BriefcaseFlapFlatProps> {}
