import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusSharp: ForwardRefExoticComponent<ChatPlusSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusSharp;
export { ChatPlusSharp };
