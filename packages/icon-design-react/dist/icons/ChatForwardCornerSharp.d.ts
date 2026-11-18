import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardCornerSharp: ForwardRefExoticComponent<ChatForwardCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardCornerSharp;
export { ChatForwardCornerSharp };
