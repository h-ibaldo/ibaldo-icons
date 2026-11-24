import { SvelteComponent } from 'svelte';

export interface PhoneUnlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneUnlock extends SvelteComponent<PhoneUnlockProps> {}
