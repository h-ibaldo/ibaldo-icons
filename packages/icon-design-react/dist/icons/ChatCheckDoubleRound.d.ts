import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleRound: ForwardRefExoticComponent<ChatCheckDoubleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleRound;
export { ChatCheckDoubleRound };
