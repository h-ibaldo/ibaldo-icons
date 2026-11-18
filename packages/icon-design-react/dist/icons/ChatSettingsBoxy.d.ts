import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSettingsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSettingsBoxy: ForwardRefExoticComponent<ChatSettingsBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatSettingsBoxy;
export { ChatSettingsBoxy };
