import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockSharp: ForwardRefExoticComponent<ChatLockSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatLockSharp;
export { ChatLockSharp };
