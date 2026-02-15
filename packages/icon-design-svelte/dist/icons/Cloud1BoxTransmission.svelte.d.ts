import { SvelteComponent } from 'svelte';

export interface Cloud1BoxTransmissionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1BoxTransmission extends SvelteComponent<Cloud1BoxTransmissionProps> {}
