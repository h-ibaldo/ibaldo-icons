import { SvelteComponent } from 'svelte';

export interface ChatStackSunSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunSlant extends SvelteComponent<ChatStackSunSlantProps> {}
