import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleSharp: ForwardRefExoticComponent<ChatPlusCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleSharp;
export { ChatPlusCircleSharp };
