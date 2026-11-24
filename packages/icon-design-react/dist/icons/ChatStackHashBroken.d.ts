import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashBroken: ForwardRefExoticComponent<ChatStackHashBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashBroken;
export { ChatStackHashBroken };
