import { SvelteComponent } from 'svelte';

export interface GripBarsHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripBarsHorizontal extends SvelteComponent<GripBarsHorizontalProps> {}
