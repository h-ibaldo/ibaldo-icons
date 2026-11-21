import { SvelteComponent } from 'svelte';

export interface ChatVoicemailBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVoicemailBoxy extends SvelteComponent<ChatVoicemailBoxyProps> {}
