import { SvelteComponent } from 'svelte';

export interface PhoneArrowBendUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowBendUp extends SvelteComponent<PhoneArrowBendUpProps> {}
