import { SvelteComponent } from 'svelte';

export interface ArrowCornerUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerUpLeft extends SvelteComponent<ArrowCornerUpLeftProps> {}
