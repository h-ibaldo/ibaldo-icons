import { SvelteComponent } from 'svelte';

export interface PhoneCircleArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneCircleArrowOut extends SvelteComponent<PhoneCircleArrowOutProps> {}
