import { SvelteComponent } from 'svelte';

export interface SignalBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalBars extends SvelteComponent<SignalBarsProps> {}
