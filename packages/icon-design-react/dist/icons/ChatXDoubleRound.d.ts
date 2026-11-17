import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleRound: ForwardRefExoticComponent<ChatXDoubleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleRound;
export { ChatXDoubleRound };
