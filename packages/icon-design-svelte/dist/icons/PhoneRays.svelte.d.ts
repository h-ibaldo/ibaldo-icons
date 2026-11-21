import { SvelteComponent } from 'svelte';

export interface PhoneRaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneRays extends SvelteComponent<PhoneRaysProps> {}
