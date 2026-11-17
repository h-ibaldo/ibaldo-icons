import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusRound: ForwardRefExoticComponent<ChatPlusRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusRound;
export { ChatPlusRound };
