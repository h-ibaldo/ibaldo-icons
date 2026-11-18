import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardSharp: ForwardRefExoticComponent<ChatForwardSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardSharp;
export { ChatForwardSharp };
