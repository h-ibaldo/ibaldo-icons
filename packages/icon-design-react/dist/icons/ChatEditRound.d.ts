import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditRound: ForwardRefExoticComponent<ChatEditRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatEditRound;
export { ChatEditRound };
