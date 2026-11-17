import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsBroken: ForwardRefExoticComponent<ChatEqualsBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsBroken;
export { ChatEqualsBroken };
