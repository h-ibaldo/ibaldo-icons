import { SvelteComponent } from 'svelte';

export interface ChatSettingsSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsSlant extends SvelteComponent<ChatSettingsSlantProps> {}
