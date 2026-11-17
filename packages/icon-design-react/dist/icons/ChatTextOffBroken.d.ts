import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffBroken: ForwardRefExoticComponent<ChatTextOffBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffBroken;
export { ChatTextOffBroken };
