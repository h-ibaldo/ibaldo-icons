import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircle: ForwardRefExoticComponent<ChatMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircle;
export { ChatMinusCircle };
