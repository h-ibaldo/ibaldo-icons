import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockFacing: ForwardRefExoticComponent<ChatStackLockFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockFacing;
export { ChatStackLockFacing };
