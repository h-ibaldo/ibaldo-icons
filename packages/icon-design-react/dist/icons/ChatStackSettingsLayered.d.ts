import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsLayered: ForwardRefExoticComponent<ChatStackSettingsLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsLayered;
export { ChatStackSettingsLayered };
