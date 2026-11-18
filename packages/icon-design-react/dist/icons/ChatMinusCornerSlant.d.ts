import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerSlant: ForwardRefExoticComponent<ChatMinusCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerSlant;
export { ChatMinusCornerSlant };
