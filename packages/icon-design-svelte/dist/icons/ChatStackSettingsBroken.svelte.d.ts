import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsBroken extends SvelteComponent<ChatStackSettingsBrokenProps> {}
