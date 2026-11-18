import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusTooltip: ForwardRefExoticComponent<ChatStackMinusTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusTooltip;
export { ChatStackMinusTooltip };
