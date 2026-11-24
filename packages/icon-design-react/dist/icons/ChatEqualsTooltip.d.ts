import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsTooltip: ForwardRefExoticComponent<ChatEqualsTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsTooltip;
export { ChatEqualsTooltip };
