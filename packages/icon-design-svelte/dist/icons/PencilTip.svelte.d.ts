import { SvelteComponent } from 'svelte';

export interface PencilTipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTip extends SvelteComponent<PencilTipProps> {}
