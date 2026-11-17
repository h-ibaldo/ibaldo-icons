import { SvelteComponent } from 'svelte';

export interface TechnicalSupportHeadsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportHeadset extends SvelteComponent<TechnicalSupportHeadsetProps> {}
