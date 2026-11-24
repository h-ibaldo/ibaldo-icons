import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerBroken: ForwardRefExoticComponent<ChatLockCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerBroken;
export { ChatLockCornerBroken };
