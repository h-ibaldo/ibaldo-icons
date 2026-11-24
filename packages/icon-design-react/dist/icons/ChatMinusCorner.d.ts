import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCorner: ForwardRefExoticComponent<ChatMinusCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCorner;
export { ChatMinusCorner };
