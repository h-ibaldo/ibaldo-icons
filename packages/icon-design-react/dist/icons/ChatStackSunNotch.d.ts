import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunNotch: ForwardRefExoticComponent<ChatStackSunNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunNotch;
export { ChatStackSunNotch };
