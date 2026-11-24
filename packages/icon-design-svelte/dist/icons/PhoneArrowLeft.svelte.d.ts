import { SvelteComponent } from 'svelte';

export interface PhoneArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowLeft extends SvelteComponent<PhoneArrowLeftProps> {}
