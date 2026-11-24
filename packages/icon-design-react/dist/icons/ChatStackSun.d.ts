import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSun: ForwardRefExoticComponent<ChatStackSunProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSun;
export { ChatStackSun };
