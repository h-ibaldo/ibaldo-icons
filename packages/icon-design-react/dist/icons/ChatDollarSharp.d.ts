import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarSharp: ForwardRefExoticComponent<ChatDollarSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarSharp;
export { ChatDollarSharp };
