import { SvelteComponent } from 'svelte';

export interface RouterAntennaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RouterAntenna extends SvelteComponent<RouterAntennaProps> {}
