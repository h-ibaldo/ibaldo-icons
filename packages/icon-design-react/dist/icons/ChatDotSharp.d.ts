import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotSharp: ForwardRefExoticComponent<ChatDotSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotSharp;
export { ChatDotSharp };
