import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffTooltip: ForwardRefExoticComponent<ChatStackOffTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffTooltip;
export { ChatStackOffTooltip };
