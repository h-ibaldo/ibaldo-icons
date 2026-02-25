import { SvelteComponent } from 'svelte';

export interface MobilePopUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobilePopUp extends SvelteComponent<MobilePopUpProps> {}
