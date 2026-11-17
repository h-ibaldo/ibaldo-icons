import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuestionTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuestionTooltip: ForwardRefExoticComponent<ChatQuestionTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatQuestionTooltip;
export { ChatQuestionTooltip };
