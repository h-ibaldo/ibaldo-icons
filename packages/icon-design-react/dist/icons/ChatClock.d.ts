import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClock: ForwardRefExoticComponent<ChatClockProps & RefAttributes<SVGSVGElement>>;

export default ChatClock;
export { ChatClock };
