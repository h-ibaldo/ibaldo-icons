import { SvelteComponent } from 'svelte';

export interface BriefcaseSatchelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseSatchel extends SvelteComponent<BriefcaseSatchelProps> {}
