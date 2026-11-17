import { SvelteComponent } from 'svelte';

export interface BriefcaseSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseSearch extends SvelteComponent<BriefcaseSearchProps> {}
