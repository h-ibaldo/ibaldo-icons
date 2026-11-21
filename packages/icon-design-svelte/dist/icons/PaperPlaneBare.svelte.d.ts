import { SvelteComponent } from 'svelte';

export interface PaperPlaneBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlaneBare extends SvelteComponent<PaperPlaneBareProps> {}
