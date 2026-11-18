import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningRound: ForwardRefExoticComponent<ChatWarningRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningRound;
export { ChatWarningRound };
