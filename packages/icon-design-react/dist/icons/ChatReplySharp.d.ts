import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplySharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplySharp: ForwardRefExoticComponent<ChatReplySharpProps & RefAttributes<SVGSVGElement>>;

export default ChatReplySharp;
export { ChatReplySharp };
