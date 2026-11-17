import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextRound: ForwardRefExoticComponent<ChatTextRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatTextRound;
export { ChatTextRound };
