import { SvelteComponent } from 'svelte';

export interface BriefcaseRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseRemove extends SvelteComponent<BriefcaseRemoveProps> {}
