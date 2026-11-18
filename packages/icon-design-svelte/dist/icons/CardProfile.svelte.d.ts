import { SvelteComponent } from 'svelte';

export interface CardProfileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CardProfile extends SvelteComponent<CardProfileProps> {}
