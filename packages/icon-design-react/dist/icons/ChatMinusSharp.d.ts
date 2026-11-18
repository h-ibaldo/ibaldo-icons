import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusSharp: ForwardRefExoticComponent<ChatMinusSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusSharp;
export { ChatMinusSharp };
