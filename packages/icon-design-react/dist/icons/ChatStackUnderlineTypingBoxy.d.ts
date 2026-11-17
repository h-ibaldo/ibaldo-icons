import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTypingBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTypingBoxy: ForwardRefExoticComponent<ChatStackUnderlineTypingBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTypingBoxy;
export { ChatStackUnderlineTypingBoxy };
