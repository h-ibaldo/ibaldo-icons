import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockLayered: ForwardRefExoticComponent<ChatStackClockLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockLayered;
export { ChatStackClockLayered };
