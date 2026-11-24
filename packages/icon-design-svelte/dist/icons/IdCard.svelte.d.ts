import { SvelteComponent } from 'svelte';

export interface IdCardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IdCard extends SvelteComponent<IdCardProps> {}
