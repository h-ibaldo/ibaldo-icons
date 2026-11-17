import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXTooltip: ForwardRefExoticComponent<ChatStackXTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXTooltip;
export { ChatStackXTooltip };
