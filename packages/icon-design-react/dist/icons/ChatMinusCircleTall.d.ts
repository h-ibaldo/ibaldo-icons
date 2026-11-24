import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleTall: ForwardRefExoticComponent<ChatMinusCircleTallProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleTall;
export { ChatMinusCircleTall };
