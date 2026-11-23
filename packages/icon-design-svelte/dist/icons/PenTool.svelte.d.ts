import { SvelteComponent } from 'svelte';

export interface PenToolProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PenTool extends SvelteComponent<PenToolProps> {}
