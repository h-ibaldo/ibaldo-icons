import { SvelteComponent } from 'svelte';

export interface PaintRollerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintRoller extends SvelteComponent<PaintRollerProps> {}
