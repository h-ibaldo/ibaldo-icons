import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunBroken: ForwardRefExoticComponent<ChatStackSunBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunBroken;
export { ChatStackSunBroken };
