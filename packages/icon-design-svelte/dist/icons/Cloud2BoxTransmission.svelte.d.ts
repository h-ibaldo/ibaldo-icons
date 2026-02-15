import { SvelteComponent } from 'svelte';

export interface Cloud2BoxTransmissionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2BoxTransmission extends SvelteComponent<Cloud2BoxTransmissionProps> {}
