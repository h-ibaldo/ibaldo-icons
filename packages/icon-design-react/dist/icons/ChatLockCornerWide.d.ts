import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerWide: ForwardRefExoticComponent<ChatLockCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerWide;
export { ChatLockCornerWide };
