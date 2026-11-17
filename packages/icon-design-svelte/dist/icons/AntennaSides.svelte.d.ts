import { SvelteComponent } from 'svelte';

export interface AntennaSidesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AntennaSides extends SvelteComponent<AntennaSidesProps> {}
