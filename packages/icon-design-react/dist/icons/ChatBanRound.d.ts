import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanRound: ForwardRefExoticComponent<ChatBanRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatBanRound;
export { ChatBanRound };
