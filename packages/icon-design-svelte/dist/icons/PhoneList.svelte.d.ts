import { SvelteComponent } from 'svelte';

export interface PhoneListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneList extends SvelteComponent<PhoneListProps> {}
