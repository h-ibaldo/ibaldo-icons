import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlap extends SvelteComponent<BriefcaseFlapProps> {}
