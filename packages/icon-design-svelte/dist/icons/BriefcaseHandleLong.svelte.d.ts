import { SvelteComponent } from 'svelte';

export interface BriefcaseHandleLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseHandleLong extends SvelteComponent<BriefcaseHandleLongProps> {}
