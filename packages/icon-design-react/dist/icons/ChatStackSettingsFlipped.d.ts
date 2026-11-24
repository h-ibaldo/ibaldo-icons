import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsFlipped: ForwardRefExoticComponent<ChatStackSettingsFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsFlipped;
export { ChatStackSettingsFlipped };
