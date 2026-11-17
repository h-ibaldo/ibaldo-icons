import { SvelteComponent } from 'svelte';

export interface PencilUnderlineCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderlineCurved extends SvelteComponent<PencilUnderlineCurvedProps> {}
