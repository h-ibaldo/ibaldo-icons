import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusTooltip: ForwardRefExoticComponent<ChatStackPlusTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusTooltip;
export { ChatStackPlusTooltip };
