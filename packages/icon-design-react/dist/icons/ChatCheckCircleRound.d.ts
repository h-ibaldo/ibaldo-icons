import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleRound: ForwardRefExoticComponent<ChatCheckCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleRound;
export { ChatCheckCircleRound };
