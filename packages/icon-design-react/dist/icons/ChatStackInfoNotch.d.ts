import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoNotch: ForwardRefExoticComponent<ChatStackInfoNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoNotch;
export { ChatStackInfoNotch };
