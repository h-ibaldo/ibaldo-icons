import { SvelteComponent } from 'svelte';

export interface TechnicalSupportPersonHeadsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportPersonHeadset extends SvelteComponent<TechnicalSupportPersonHeadsetProps> {}
