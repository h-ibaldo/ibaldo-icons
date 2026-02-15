import { SvelteComponent } from 'svelte';

export interface Cloud3BoxTransmissionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3BoxTransmission extends SvelteComponent<Cloud3BoxTransmissionProps> {}
