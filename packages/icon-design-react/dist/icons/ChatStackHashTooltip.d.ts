import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashTooltip: ForwardRefExoticComponent<ChatStackHashTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashTooltip;
export { ChatStackHashTooltip };
