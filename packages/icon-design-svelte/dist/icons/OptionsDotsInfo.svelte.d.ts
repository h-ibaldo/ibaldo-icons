import { SvelteComponent } from 'svelte';

export interface OptionsDotsInfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsDotsInfo extends SvelteComponent<OptionsDotsInfoProps> {}
