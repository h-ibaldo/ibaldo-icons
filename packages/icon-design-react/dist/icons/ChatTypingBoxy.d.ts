import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingBoxy: ForwardRefExoticComponent<ChatTypingBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingBoxy;
export { ChatTypingBoxy };
