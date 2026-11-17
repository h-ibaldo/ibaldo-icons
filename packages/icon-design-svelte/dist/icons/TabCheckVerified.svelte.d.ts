import { SvelteComponent } from 'svelte';

export interface TabCheckVerifiedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckVerified extends SvelteComponent<TabCheckVerifiedProps> {}
