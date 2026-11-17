import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockTooltip: ForwardRefExoticComponent<ChatLockTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatLockTooltip;
export { ChatLockTooltip };
