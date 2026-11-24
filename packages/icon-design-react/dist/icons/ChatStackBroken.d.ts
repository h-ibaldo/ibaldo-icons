import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBroken: ForwardRefExoticComponent<ChatStackBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBroken;
export { ChatStackBroken };
