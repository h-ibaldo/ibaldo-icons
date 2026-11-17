import { SvelteComponent } from 'svelte';

export interface BinocularsEyecupsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsEyecups extends SvelteComponent<BinocularsEyecupsProps> {}
