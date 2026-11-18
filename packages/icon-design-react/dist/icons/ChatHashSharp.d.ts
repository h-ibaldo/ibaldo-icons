import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashSharp: ForwardRefExoticComponent<ChatHashSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatHashSharp;
export { ChatHashSharp };
