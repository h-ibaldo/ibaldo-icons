import { SvelteComponent } from 'svelte';

export interface SupportProfileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SupportProfile extends SvelteComponent<SupportProfileProps> {}
