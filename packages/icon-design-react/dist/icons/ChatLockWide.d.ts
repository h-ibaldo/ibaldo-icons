import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockWide: ForwardRefExoticComponent<ChatLockWideProps & RefAttributes<SVGSVGElement>>;

export default ChatLockWide;
export { ChatLockWide };
