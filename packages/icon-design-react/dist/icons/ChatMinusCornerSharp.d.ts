import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerSharp: ForwardRefExoticComponent<ChatMinusCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerSharp;
export { ChatMinusCornerSharp };
