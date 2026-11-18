import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunSharp: ForwardRefExoticComponent<ChatSunSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatSunSharp;
export { ChatSunSharp };
