import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsBroken: ForwardRefExoticComponent<ChatStackDotsBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsBroken;
export { ChatStackDotsBroken };
