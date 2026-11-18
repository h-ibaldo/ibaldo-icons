import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterTTooltip: ForwardRefExoticComponent<ChatLetterTTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterTTooltip;
export { ChatLetterTTooltip };
