import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerBoxy: ForwardRefExoticComponent<ChatStackLockCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerBoxy;
export { ChatStackLockCornerBoxy };
