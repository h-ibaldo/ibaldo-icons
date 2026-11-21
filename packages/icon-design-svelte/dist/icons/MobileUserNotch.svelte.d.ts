import { SvelteComponent } from 'svelte';

export interface MobileUserNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileUserNotch extends SvelteComponent<MobileUserNotchProps> {}
