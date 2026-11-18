import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockSlant: ForwardRefExoticComponent<ChatStackClockSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockSlant;
export { ChatStackClockSlant };
