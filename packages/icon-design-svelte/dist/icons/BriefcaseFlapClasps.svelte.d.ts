import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapClaspsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapClasps extends SvelteComponent<BriefcaseFlapClaspsProps> {}
