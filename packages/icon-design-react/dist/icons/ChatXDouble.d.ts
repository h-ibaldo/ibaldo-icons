import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDouble: ForwardRefExoticComponent<ChatXDoubleProps & RefAttributes<SVGSVGElement>>;

export default ChatXDouble;
export { ChatXDouble };
