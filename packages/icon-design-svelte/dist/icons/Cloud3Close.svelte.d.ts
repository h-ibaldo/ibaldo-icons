import { SvelteComponent } from 'svelte';

export interface Cloud3CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Close extends SvelteComponent<Cloud3CloseProps> {}
