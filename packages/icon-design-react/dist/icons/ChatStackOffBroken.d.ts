import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffBroken: ForwardRefExoticComponent<ChatStackOffBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffBroken;
export { ChatStackOffBroken };
