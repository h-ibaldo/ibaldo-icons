import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerSharp: ForwardRefExoticComponent<ChatXCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerSharp;
export { ChatXCornerSharp };
