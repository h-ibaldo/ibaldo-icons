import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusTall: ForwardRefExoticComponent<ChatMinusTallProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusTall;
export { ChatMinusTall };
