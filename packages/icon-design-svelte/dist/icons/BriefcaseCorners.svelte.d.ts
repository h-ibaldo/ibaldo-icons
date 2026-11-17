import { SvelteComponent } from 'svelte';

export interface BriefcaseCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseCorners extends SvelteComponent<BriefcaseCornersProps> {}
