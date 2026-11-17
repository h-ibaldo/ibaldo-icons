import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStarRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStarRound: ForwardRefExoticComponent<ChatStarRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatStarRound;
export { ChatStarRound };
