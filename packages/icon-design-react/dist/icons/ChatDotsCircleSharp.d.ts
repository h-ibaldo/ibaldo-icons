import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleSharp: ForwardRefExoticComponent<ChatDotsCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleSharp;
export { ChatDotsCircleSharp };
