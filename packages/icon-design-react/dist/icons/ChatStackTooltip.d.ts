import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTooltip: ForwardRefExoticComponent<ChatStackTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTooltip;
export { ChatStackTooltip };
