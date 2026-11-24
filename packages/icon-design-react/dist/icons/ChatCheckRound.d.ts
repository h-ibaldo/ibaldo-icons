import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckRound: ForwardRefExoticComponent<ChatCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckRound;
export { ChatCheckRound };
