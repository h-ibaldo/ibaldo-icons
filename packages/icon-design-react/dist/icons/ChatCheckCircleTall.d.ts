import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleTall: ForwardRefExoticComponent<ChatCheckCircleTallProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleTall;
export { ChatCheckCircleTall };
