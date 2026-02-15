import { SvelteComponent } from 'svelte';

export interface BriefcaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase extends SvelteComponent<BriefcaseProps> {}
