import { SvelteComponent } from 'svelte';

export interface ChatAlertSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertSlant extends SvelteComponent<ChatAlertSlantProps> {}
