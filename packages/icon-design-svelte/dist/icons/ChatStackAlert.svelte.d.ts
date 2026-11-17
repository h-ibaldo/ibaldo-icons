import { SvelteComponent } from 'svelte';

export interface ChatStackAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlert extends SvelteComponent<ChatStackAlertProps> {}
