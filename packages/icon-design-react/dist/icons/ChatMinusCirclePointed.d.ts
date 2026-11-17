import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCirclePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCirclePointed: ForwardRefExoticComponent<ChatMinusCirclePointedProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCirclePointed;
export { ChatMinusCirclePointed };
