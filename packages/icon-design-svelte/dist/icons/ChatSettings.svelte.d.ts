import { SvelteComponent } from 'svelte';

export interface ChatSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettings extends SvelteComponent<ChatSettingsProps> {}
