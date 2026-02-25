import { SvelteComponent } from 'svelte';

export interface OfflinePinCheckCircleLineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OfflinePinCheckCircleLine extends SvelteComponent<OfflinePinCheckCircleLineProps> {}
