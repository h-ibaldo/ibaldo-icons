import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllSharp: ForwardRefExoticComponent<ChatReplyAllSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllSharp;
export { ChatReplyAllSharp };
