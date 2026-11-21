import { SvelteComponent } from 'svelte';

export interface PhoneCircleArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneCircleArrowIn extends SvelteComponent<PhoneCircleArrowInProps> {}
