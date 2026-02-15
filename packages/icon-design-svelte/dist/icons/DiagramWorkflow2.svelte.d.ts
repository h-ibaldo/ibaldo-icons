import { SvelteComponent } from 'svelte';

export interface DiagramWorkflow2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramWorkflow2 extends SvelteComponent<DiagramWorkflow2Props> {}
