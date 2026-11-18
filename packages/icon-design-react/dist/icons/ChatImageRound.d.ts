import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageRound: ForwardRefExoticComponent<ChatImageRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatImageRound;
export { ChatImageRound };
