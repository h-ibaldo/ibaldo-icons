import { SvelteComponent } from 'svelte';

export interface BriefcaseBeltClaspsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseBeltClasps extends SvelteComponent<BriefcaseBeltClaspsProps> {}
