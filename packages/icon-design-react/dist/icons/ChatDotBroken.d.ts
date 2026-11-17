import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotBroken: ForwardRefExoticComponent<ChatDotBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotBroken;
export { ChatDotBroken };
