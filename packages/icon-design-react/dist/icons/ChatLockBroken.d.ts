import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockBroken: ForwardRefExoticComponent<ChatLockBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatLockBroken;
export { ChatLockBroken };
