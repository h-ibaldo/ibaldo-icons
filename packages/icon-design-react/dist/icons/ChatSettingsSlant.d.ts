import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSettingsSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSettingsSlant: ForwardRefExoticComponent<ChatSettingsSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatSettingsSlant;
export { ChatSettingsSlant };
