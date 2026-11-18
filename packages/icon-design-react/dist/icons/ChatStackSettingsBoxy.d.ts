import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsBoxy: ForwardRefExoticComponent<ChatStackSettingsBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsBoxy;
export { ChatStackSettingsBoxy };
