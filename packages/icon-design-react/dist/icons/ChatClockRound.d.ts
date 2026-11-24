import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockRound: ForwardRefExoticComponent<ChatClockRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatClockRound;
export { ChatClockRound };
