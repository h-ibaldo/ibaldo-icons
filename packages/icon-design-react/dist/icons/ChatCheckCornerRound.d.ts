import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerRound: ForwardRefExoticComponent<ChatCheckCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerRound;
export { ChatCheckCornerRound };
