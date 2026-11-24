import { SvelteComponent } from 'svelte';

export interface ChartBarCirclePlusThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCirclePlusThin extends SvelteComponent<ChartBarCirclePlusThinProps> {}
