import { SvelteComponent } from 'svelte';

export interface SignalCellTower3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalCellTower3 extends SvelteComponent<SignalCellTower3Props> {}
