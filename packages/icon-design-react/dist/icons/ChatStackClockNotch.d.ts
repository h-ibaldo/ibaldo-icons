import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockNotch: ForwardRefExoticComponent<ChatStackClockNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockNotch;
export { ChatStackClockNotch };
