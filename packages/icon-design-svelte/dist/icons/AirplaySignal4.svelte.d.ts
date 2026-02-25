import { SvelteComponent } from 'svelte';

export interface AirplaySignal4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignal4 extends SvelteComponent<AirplaySignal4Props> {}
