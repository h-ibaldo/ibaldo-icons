import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCirclePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCirclePointed: ForwardRefExoticComponent<ChatCheckCirclePointedProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCirclePointed;
export { ChatCheckCirclePointed };
