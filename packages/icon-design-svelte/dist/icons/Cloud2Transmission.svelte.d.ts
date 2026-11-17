import { SvelteComponent } from 'svelte';

export interface Cloud2TransmissionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Transmission extends SvelteComponent<Cloud2TransmissionProps> {}
