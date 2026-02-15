import { SvelteComponent } from 'svelte';

export interface Cloud2GearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Gear extends SvelteComponent<Cloud2GearProps> {}
