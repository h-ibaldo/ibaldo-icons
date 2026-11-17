import { SvelteComponent } from 'svelte';

export interface SignalArcsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalArcs extends SvelteComponent<SignalArcsProps> {}
