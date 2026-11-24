import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsNotch: ForwardRefExoticComponent<ChatStackDotsNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsNotch;
export { ChatStackDotsNotch };
