import { SvelteComponent } from 'svelte';

export interface OptionsCheckInfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckInfo extends SvelteComponent<OptionsCheckInfoProps> {}
