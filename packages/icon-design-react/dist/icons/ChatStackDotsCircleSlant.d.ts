import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircleSlant: ForwardRefExoticComponent<ChatStackDotsCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircleSlant;
export { ChatStackDotsCircleSlant };
