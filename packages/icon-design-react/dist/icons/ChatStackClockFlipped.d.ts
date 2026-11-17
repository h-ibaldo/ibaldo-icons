import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockFlipped: ForwardRefExoticComponent<ChatStackClockFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockFlipped;
export { ChatStackClockFlipped };
