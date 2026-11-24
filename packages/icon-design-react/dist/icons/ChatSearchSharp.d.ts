import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchSharp: ForwardRefExoticComponent<ChatSearchSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchSharp;
export { ChatSearchSharp };
