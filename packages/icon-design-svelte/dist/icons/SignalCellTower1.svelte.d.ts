import { SvelteComponent } from 'svelte';

export interface SignalCellTower1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalCellTower1 extends SvelteComponent<SignalCellTower1Props> {}
