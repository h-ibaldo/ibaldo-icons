import { SvelteComponent } from 'svelte';

export interface BriefcaseStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseStriped extends SvelteComponent<BriefcaseStripedProps> {}
