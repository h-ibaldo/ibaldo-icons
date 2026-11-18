import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusBroken: ForwardRefExoticComponent<ChatMinusBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusBroken;
export { ChatMinusBroken };
