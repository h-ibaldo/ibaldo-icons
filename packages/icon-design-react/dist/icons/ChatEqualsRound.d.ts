import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsRound: ForwardRefExoticComponent<ChatEqualsRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsRound;
export { ChatEqualsRound };
