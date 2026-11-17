import { SvelteComponent } from 'svelte';

export interface Cloud2RestrictedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Restricted extends SvelteComponent<Cloud2RestrictedProps> {}
