import { SvelteComponent } from 'svelte';

export interface SignalCellTower4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalCellTower4 extends SvelteComponent<SignalCellTower4Props> {}
