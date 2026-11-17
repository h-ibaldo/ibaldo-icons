import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardBroken: ForwardRefExoticComponent<ChatStackForwardBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardBroken;
export { ChatStackForwardBroken };
