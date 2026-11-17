import { SvelteComponent } from 'svelte';

export interface BriefcasePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcasePlus extends SvelteComponent<BriefcasePlusProps> {}
