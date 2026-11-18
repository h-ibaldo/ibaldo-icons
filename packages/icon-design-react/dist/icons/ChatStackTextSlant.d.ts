import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextSlant: ForwardRefExoticComponent<ChatStackTextSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextSlant;
export { ChatStackTextSlant };
