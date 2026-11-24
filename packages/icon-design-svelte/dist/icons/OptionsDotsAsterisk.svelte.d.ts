import { SvelteComponent } from 'svelte';

export interface OptionsDotsAsteriskProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsDotsAsterisk extends SvelteComponent<OptionsDotsAsteriskProps> {}
