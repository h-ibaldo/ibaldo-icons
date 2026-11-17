import { SvelteComponent } from 'svelte';

export interface TechnicalSupportToolProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportTool extends SvelteComponent<TechnicalSupportToolProps> {}
