import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalSharp: ForwardRefExoticComponent<ChatDotsVerticalSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalSharp;
export { ChatDotsVerticalSharp };
