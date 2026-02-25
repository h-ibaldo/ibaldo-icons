import { SvelteComponent } from 'svelte';

export interface SignalCellTower2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalCellTower2 extends SvelteComponent<SignalCellTower2Props> {}
