import type { DefineComponent } from 'vue';

export interface WindowChatRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChatRound: DefineComponent<WindowChatRoundProps>;

export default WindowChatRound;
export { WindowChatRound };
