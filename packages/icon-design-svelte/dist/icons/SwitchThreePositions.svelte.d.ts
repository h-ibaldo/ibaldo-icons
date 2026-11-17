import { SvelteComponent } from 'svelte';

export interface SwitchThreePositionsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchThreePositions extends SvelteComponent<SwitchThreePositionsProps> {}
