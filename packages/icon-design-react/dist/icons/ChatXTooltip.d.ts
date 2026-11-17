import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXTooltip: ForwardRefExoticComponent<ChatXTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatXTooltip;
export { ChatXTooltip };
