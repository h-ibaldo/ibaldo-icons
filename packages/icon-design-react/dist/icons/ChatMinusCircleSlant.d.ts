import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleSlant: ForwardRefExoticComponent<ChatMinusCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleSlant;
export { ChatMinusCircleSlant };
