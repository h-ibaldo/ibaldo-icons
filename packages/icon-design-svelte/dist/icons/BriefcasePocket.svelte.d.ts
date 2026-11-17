import { SvelteComponent } from 'svelte';

export interface BriefcasePocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcasePocket extends SvelteComponent<BriefcasePocketProps> {}
