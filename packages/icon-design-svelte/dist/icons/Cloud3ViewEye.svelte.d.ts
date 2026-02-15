import { SvelteComponent } from 'svelte';

export interface Cloud3ViewEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3ViewEye extends SvelteComponent<Cloud3ViewEyeProps> {}
