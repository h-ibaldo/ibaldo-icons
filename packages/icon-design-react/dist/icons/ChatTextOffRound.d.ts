import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffRound: ForwardRefExoticComponent<ChatTextOffRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffRound;
export { ChatTextOffRound };
