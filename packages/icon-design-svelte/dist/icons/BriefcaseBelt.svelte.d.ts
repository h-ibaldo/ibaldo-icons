import { SvelteComponent } from 'svelte';

export interface BriefcaseBeltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseBelt extends SvelteComponent<BriefcaseBeltProps> {}
