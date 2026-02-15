import { SvelteComponent } from 'svelte';

export interface AirplaySignal2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignal2 extends SvelteComponent<AirplaySignal2Props> {}
