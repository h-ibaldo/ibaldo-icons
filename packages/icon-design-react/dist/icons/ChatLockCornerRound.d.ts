import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerRound: ForwardRefExoticComponent<ChatLockCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerRound;
export { ChatLockCornerRound };
