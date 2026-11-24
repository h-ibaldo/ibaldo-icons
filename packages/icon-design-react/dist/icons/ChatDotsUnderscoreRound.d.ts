import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreRound: ForwardRefExoticComponent<ChatDotsUnderscoreRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreRound;
export { ChatDotsUnderscoreRound };
