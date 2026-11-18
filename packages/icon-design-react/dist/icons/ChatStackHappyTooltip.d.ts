import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappyTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappyTooltip: ForwardRefExoticComponent<ChatStackHappyTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappyTooltip;
export { ChatStackHappyTooltip };
