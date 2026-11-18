import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDouble: ForwardRefExoticComponent<ChatCheckDoubleProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDouble;
export { ChatCheckDouble };
