import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffNotch: ForwardRefExoticComponent<ChatStackOffNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffNotch;
export { ChatStackOffNotch };
