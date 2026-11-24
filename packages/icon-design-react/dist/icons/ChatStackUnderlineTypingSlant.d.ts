import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTypingSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTypingSlant: ForwardRefExoticComponent<ChatStackUnderlineTypingSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTypingSlant;
export { ChatStackUnderlineTypingSlant };
