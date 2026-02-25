import { SvelteComponent } from 'svelte';

export interface TechnicalSupportToolGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportToolGear extends SvelteComponent<TechnicalSupportToolGearProps> {}
