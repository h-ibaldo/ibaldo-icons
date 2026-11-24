import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircleNotch: ForwardRefExoticComponent<ChatStackDotsCircleNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircleNotch;
export { ChatStackDotsCircleNotch };
