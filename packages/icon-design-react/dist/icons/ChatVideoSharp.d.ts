import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoSharp: ForwardRefExoticComponent<ChatVideoSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoSharp;
export { ChatVideoSharp };
