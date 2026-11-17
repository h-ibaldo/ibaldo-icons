import { SvelteComponent } from 'svelte';

export interface BriefcaseCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseCheck extends SvelteComponent<BriefcaseCheckProps> {}
