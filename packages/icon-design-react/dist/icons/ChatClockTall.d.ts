import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockTall: ForwardRefExoticComponent<ChatClockTallProps & RefAttributes<SVGSVGElement>>;

export default ChatClockTall;
export { ChatClockTall };
