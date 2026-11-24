import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardNotch: ForwardRefExoticComponent<ChatStackForwardNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardNotch;
export { ChatStackForwardNotch };
