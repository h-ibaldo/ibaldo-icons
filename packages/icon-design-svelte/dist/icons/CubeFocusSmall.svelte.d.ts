import { SvelteComponent } from 'svelte';

export interface CubeFocusSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CubeFocusSmall extends SvelteComponent<CubeFocusSmallProps> {}
