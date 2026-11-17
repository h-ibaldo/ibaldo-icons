import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapClaspProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapClasp extends SvelteComponent<BriefcaseFlapClaspProps> {}
