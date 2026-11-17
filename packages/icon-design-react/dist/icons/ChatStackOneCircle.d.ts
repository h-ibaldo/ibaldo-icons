import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircle: ForwardRefExoticComponent<ChatStackOneCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircle;
export { ChatStackOneCircle };
