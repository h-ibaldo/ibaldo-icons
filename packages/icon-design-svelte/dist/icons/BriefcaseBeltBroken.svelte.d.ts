import { SvelteComponent } from 'svelte';

export interface BriefcaseBeltBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseBeltBroken extends SvelteComponent<BriefcaseBeltBrokenProps> {}
