import { SvelteComponent } from 'svelte';

export interface ChatStackInfoSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoSlant extends SvelteComponent<ChatStackInfoSlantProps> {}
