import { SvelteComponent } from 'svelte';

export interface Cloud3BoxTransmitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3BoxTransmit extends SvelteComponent<Cloud3BoxTransmitProps> {}
