import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerSharp: ForwardRefExoticComponent<ChatLockCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerSharp;
export { ChatLockCornerSharp };
