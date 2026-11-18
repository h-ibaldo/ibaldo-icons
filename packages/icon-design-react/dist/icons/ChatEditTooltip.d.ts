import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditTooltip: ForwardRefExoticComponent<ChatEditTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatEditTooltip;
export { ChatEditTooltip };
