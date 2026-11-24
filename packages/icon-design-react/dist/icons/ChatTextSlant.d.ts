import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextSlant: ForwardRefExoticComponent<ChatTextSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatTextSlant;
export { ChatTextSlant };
