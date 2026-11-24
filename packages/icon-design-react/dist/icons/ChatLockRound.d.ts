import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockRound: ForwardRefExoticComponent<ChatLockRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatLockRound;
export { ChatLockRound };
