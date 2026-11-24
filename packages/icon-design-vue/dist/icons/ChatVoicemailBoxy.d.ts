import type { DefineComponent } from 'vue';

export interface ChatVoicemailBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVoicemailBoxy: DefineComponent<ChatVoicemailBoxyProps>;

export default ChatVoicemailBoxy;
export { ChatVoicemailBoxy };
