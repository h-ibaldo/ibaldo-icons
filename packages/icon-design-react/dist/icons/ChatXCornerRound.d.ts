import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerRound: ForwardRefExoticComponent<ChatXCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerRound;
export { ChatXCornerRound };
