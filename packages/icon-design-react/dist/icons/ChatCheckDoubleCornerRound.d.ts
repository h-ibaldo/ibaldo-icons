import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerRound: ForwardRefExoticComponent<ChatCheckDoubleCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerRound;
export { ChatCheckDoubleCornerRound };
