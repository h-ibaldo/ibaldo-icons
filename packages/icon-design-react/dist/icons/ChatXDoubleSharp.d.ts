import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleSharp: ForwardRefExoticComponent<ChatXDoubleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleSharp;
export { ChatXDoubleSharp };
