import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarBroken: ForwardRefExoticComponent<ChatDollarBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarBroken;
export { ChatDollarBroken };
