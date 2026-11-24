import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReply: ForwardRefExoticComponent<ChatStackReplyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReply;
export { ChatStackReply };
