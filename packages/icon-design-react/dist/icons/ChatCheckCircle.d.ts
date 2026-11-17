import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircle: ForwardRefExoticComponent<ChatCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircle;
export { ChatCheckCircle };
