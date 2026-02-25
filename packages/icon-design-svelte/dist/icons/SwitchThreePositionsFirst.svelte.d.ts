import { SvelteComponent } from 'svelte';

export interface SwitchThreePositionsFirstProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchThreePositionsFirst extends SvelteComponent<SwitchThreePositionsFirstProps> {}
