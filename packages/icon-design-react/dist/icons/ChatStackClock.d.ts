import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClock: ForwardRefExoticComponent<ChatStackClockProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClock;
export { ChatStackClock };
