import { SvelteComponent } from 'svelte';

export interface ChatSettingsBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsBoxy extends SvelteComponent<ChatSettingsBoxyProps> {}
