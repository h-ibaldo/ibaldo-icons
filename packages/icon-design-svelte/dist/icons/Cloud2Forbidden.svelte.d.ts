import { SvelteComponent } from 'svelte';

export interface Cloud2ForbiddenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Forbidden extends SvelteComponent<Cloud2ForbiddenProps> {}
