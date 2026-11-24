import { SvelteComponent } from 'svelte';

export interface PilcrowArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PilcrowArrowRight extends SvelteComponent<PilcrowArrowRightProps> {}
