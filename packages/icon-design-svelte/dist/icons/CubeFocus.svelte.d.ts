import { SvelteComponent } from 'svelte';

export interface CubeFocusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CubeFocus extends SvelteComponent<CubeFocusProps> {}
