import { SvelteComponent } from 'svelte';

export interface ChatStackCheckSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckSlant extends SvelteComponent<ChatStackCheckSlantProps> {}
