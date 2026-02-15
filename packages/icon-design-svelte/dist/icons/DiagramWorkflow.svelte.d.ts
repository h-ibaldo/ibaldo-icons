import { SvelteComponent } from 'svelte';

export interface DiagramWorkflowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramWorkflow extends SvelteComponent<DiagramWorkflowProps> {}
