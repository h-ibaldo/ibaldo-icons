import { SvelteComponent } from 'svelte';

export interface PhoneHashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneHash extends SvelteComponent<PhoneHashProps> {}
