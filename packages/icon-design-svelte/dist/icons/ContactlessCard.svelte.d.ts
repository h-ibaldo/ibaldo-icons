import { SvelteComponent } from 'svelte';

export interface ContactlessCardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ContactlessCard extends SvelteComponent<ContactlessCardProps> {}
