import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsBroken: ForwardRefExoticComponent<ChatDotsBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsBroken;
export { ChatDotsBroken };
