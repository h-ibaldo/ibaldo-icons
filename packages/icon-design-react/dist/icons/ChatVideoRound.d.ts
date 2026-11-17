import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoRound: ForwardRefExoticComponent<ChatVideoRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoRound;
export { ChatVideoRound };
