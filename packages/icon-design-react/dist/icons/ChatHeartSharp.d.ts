import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartSharp: ForwardRefExoticComponent<ChatHeartSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartSharp;
export { ChatHeartSharp };
