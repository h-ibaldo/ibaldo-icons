import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffSharp: ForwardRefExoticComponent<ChatOffSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatOffSharp;
export { ChatOffSharp };
