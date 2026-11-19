import type { DefineComponent } from 'vue';

export interface ChatXTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXTooltip: DefineComponent<ChatXTooltipProps>;

export default ChatXTooltip;
export { ChatXTooltip };
