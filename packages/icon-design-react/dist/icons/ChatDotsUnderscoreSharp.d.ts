import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreSharp: ForwardRefExoticComponent<ChatDotsUnderscoreSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreSharp;
export { ChatDotsUnderscoreSharp };
