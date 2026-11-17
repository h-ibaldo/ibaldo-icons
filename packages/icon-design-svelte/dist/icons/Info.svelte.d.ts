import { SvelteComponent } from 'svelte';

export interface InfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Info extends SvelteComponent<InfoProps> {}
