import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSharp: ForwardRefExoticComponent<ChatSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatSharp;
export { ChatSharp };
