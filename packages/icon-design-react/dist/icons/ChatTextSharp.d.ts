import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextSharp: ForwardRefExoticComponent<ChatTextSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatTextSharp;
export { ChatTextSharp };
