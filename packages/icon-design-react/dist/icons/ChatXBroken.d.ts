import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXBroken: ForwardRefExoticComponent<ChatXBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatXBroken;
export { ChatXBroken };
