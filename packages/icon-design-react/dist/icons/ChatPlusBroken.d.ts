import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusBroken: ForwardRefExoticComponent<ChatPlusBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusBroken;
export { ChatPlusBroken };
