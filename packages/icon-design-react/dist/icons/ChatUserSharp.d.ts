import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserSharp: ForwardRefExoticComponent<ChatUserSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatUserSharp;
export { ChatUserSharp };
