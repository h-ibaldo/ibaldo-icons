import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleSharp: ForwardRefExoticComponent<ChatOneCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleSharp;
export { ChatOneCircleSharp };
