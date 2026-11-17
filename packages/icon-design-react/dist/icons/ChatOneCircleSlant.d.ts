import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleSlant: ForwardRefExoticComponent<ChatOneCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleSlant;
export { ChatOneCircleSlant };
