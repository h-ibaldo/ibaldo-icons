import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsBroken: ForwardRefExoticComponent<ChatStackSettingsBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsBroken;
export { ChatStackSettingsBroken };
