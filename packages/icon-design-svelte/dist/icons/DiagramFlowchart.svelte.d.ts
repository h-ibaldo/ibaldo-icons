import { SvelteComponent } from 'svelte';

export interface DiagramFlowchartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramFlowchart extends SvelteComponent<DiagramFlowchartProps> {}
