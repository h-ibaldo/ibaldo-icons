import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsSlant: ForwardRefExoticComponent<ChatStackSettingsSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsSlant;
export { ChatStackSettingsSlant };
