import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageTooltip: ForwardRefExoticComponent<ChatStackImageTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageTooltip;
export { ChatStackImageTooltip };
