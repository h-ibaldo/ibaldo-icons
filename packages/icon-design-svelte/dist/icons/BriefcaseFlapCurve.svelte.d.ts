import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapCurveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapCurve extends SvelteComponent<BriefcaseFlapCurveProps> {}
