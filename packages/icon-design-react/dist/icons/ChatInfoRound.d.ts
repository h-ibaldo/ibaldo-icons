import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoRound: ForwardRefExoticComponent<ChatInfoRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoRound;
export { ChatInfoRound };
