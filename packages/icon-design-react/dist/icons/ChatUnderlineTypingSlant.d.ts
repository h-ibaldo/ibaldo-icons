import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineTypingSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineTypingSlant: ForwardRefExoticComponent<ChatUnderlineTypingSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineTypingSlant;
export { ChatUnderlineTypingSlant };
