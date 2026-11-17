import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatRound: ForwardRefExoticComponent<ChatRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatRound;
export { ChatRound };
