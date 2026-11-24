import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReply: ForwardRefExoticComponent<ChatReplyProps & RefAttributes<SVGSVGElement>>;

export default ChatReply;
export { ChatReply };
