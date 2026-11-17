import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleSlant: ForwardRefExoticComponent<ChatDotsCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleSlant;
export { ChatDotsCircleSlant };
