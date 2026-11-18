import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsNotch: ForwardRefExoticComponent<ChatStackSettingsNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsNotch;
export { ChatStackSettingsNotch };
