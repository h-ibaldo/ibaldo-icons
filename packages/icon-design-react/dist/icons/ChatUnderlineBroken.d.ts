import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineBroken: ForwardRefExoticComponent<ChatUnderlineBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineBroken;
export { ChatUnderlineBroken };
