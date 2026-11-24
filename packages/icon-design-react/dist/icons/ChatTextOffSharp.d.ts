import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffSharp: ForwardRefExoticComponent<ChatTextOffSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffSharp;
export { ChatTextOffSharp };
