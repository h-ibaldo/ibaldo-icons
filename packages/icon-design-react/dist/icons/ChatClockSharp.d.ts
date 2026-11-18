import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockSharp: ForwardRefExoticComponent<ChatClockSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatClockSharp;
export { ChatClockSharp };
