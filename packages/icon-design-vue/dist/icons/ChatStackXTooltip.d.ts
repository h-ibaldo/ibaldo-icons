import type { DefineComponent } from 'vue';

export interface ChatStackXTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXTooltip: DefineComponent<ChatStackXTooltipProps>;

export default ChatStackXTooltip;
export { ChatStackXTooltip };
