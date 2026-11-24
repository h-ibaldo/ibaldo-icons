import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardRound: ForwardRefExoticComponent<ChatForwardRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardRound;
export { ChatForwardRound };
