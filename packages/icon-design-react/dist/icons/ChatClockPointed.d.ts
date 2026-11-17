import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockPointed: ForwardRefExoticComponent<ChatClockPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatClockPointed;
export { ChatClockPointed };
