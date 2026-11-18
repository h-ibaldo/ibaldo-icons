import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchBroken: ForwardRefExoticComponent<ChatSearchBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchBroken;
export { ChatSearchBroken };
