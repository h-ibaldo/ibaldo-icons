import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsSharp: ForwardRefExoticComponent<ChatDotsSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsSharp;
export { ChatDotsSharp };
