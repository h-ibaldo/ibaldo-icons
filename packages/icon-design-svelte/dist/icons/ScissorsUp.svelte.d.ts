import { SvelteComponent } from 'svelte';

export interface ScissorsUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScissorsUp extends SvelteComponent<ScissorsUpProps> {}
