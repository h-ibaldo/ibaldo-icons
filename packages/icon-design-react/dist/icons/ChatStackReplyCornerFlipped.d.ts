import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyCornerFlipped: ForwardRefExoticComponent<ChatStackReplyCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyCornerFlipped;
export { ChatStackReplyCornerFlipped };
