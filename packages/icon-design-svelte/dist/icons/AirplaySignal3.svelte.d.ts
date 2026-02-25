import { SvelteComponent } from 'svelte';

export interface AirplaySignal3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignal3 extends SvelteComponent<AirplaySignal3Props> {}
