import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsTooltip: ForwardRefExoticComponent<ChatStackSettingsTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsTooltip;
export { ChatStackSettingsTooltip };
