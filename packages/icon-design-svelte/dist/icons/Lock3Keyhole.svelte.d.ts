import { SvelteComponent } from 'svelte';

export interface Lock3KeyholeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Keyhole extends SvelteComponent<Lock3KeyholeProps> {}
