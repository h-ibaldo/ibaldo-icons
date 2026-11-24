import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerRound: ForwardRefExoticComponent<ChatMinusCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerRound;
export { ChatMinusCornerRound };
