import { SvelteComponent } from 'svelte';

export interface EyeLiddedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeLidded extends SvelteComponent<EyeLiddedProps> {}
