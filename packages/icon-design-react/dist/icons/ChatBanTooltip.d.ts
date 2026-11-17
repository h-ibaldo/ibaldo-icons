import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanTooltip: ForwardRefExoticComponent<ChatBanTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatBanTooltip;
export { ChatBanTooltip };
