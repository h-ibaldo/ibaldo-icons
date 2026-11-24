import { SvelteComponent } from 'svelte';

export interface ChatStackAlertSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertSlant extends SvelteComponent<ChatStackAlertSlantProps> {}
