import { SvelteComponent } from 'svelte';

export interface PeopleHoldingHandsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PeopleHoldingHands extends SvelteComponent<PeopleHoldingHandsProps> {}
