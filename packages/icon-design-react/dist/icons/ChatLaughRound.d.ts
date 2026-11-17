import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughRound: ForwardRefExoticComponent<ChatLaughRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughRound;
export { ChatLaughRound };
