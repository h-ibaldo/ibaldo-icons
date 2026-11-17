import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerBoxy: ForwardRefExoticComponent<ChatLockCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerBoxy;
export { ChatLockCornerBoxy };
