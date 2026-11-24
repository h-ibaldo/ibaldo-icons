import { SvelteComponent } from 'svelte';

export interface OptionsCheckAsteriskProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckAsterisk extends SvelteComponent<OptionsCheckAsteriskProps> {}
