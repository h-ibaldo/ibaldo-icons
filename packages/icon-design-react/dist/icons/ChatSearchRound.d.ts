import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchRound: ForwardRefExoticComponent<ChatSearchRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchRound;
export { ChatSearchRound };
