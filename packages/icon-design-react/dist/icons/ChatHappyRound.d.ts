import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappyRound: ForwardRefExoticComponent<ChatHappyRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatHappyRound;
export { ChatHappyRound };
