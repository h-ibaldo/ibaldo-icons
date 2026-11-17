import { SvelteComponent } from 'svelte';

export interface TechnicalSupportHandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportHand extends SvelteComponent<TechnicalSupportHandProps> {}
