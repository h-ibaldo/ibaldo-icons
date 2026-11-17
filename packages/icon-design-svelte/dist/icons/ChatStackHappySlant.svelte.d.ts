import { SvelteComponent } from 'svelte';

export interface ChatStackHappySlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappySlant extends SvelteComponent<ChatStackHappySlantProps> {}
