import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappyTooltip: ForwardRefExoticComponent<ChatHappyTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatHappyTooltip;
export { ChatHappyTooltip };
