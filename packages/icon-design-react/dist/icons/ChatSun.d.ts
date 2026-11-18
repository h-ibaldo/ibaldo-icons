import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSun: ForwardRefExoticComponent<ChatSunProps & RefAttributes<SVGSVGElement>>;

export default ChatSun;
export { ChatSun };
