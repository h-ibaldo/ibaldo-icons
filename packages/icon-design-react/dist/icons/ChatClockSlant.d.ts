import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockSlant: ForwardRefExoticComponent<ChatClockSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatClockSlant;
export { ChatClockSlant };
