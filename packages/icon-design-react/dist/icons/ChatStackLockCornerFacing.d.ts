import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerFacing: ForwardRefExoticComponent<ChatStackLockCornerFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerFacing;
export { ChatStackLockCornerFacing };
