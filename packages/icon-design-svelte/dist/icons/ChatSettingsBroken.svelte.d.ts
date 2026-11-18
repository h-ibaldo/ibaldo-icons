import { SvelteComponent } from 'svelte';

export interface ChatSettingsBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsBroken extends SvelteComponent<ChatSettingsBrokenProps> {}
