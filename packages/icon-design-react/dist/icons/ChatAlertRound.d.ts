import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertRound: ForwardRefExoticComponent<ChatAlertRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertRound;
export { ChatAlertRound };
