import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusSlant: ForwardRefExoticComponent<ChatMinusSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusSlant;
export { ChatMinusSlant };
