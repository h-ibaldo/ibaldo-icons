import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalNotch: ForwardRefExoticComponent<ChatStackDotsVerticalNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalNotch;
export { ChatStackDotsVerticalNotch };
