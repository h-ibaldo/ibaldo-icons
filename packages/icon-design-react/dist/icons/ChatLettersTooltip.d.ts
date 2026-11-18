import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersTooltip: ForwardRefExoticComponent<ChatLettersTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersTooltip;
export { ChatLettersTooltip };
