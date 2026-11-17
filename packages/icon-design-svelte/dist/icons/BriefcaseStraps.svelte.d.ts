import { SvelteComponent } from 'svelte';

export interface BriefcaseStrapsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseStraps extends SvelteComponent<BriefcaseStrapsProps> {}
