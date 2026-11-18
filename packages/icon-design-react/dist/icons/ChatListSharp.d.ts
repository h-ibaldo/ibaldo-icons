import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListSharp: ForwardRefExoticComponent<ChatListSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatListSharp;
export { ChatListSharp };
