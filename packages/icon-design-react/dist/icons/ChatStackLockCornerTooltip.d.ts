import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerTooltip: ForwardRefExoticComponent<ChatStackLockCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerTooltip;
export { ChatStackLockCornerTooltip };
