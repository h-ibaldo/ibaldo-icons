import { SvelteComponent } from 'svelte';

export interface TechnicalSupportToolsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportTools extends SvelteComponent<TechnicalSupportToolsProps> {}
