import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettings: ForwardRefExoticComponent<ChatStackSettingsProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettings;
export { ChatStackSettings };
