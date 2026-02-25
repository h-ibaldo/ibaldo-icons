import { SvelteComponent } from 'svelte';

export interface Cloud1AddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Add extends SvelteComponent<Cloud1AddProps> {}
