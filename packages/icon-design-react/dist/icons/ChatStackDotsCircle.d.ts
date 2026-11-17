import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircle: ForwardRefExoticComponent<ChatStackDotsCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircle;
export { ChatStackDotsCircle };
