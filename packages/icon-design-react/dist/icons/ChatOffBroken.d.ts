import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffBroken: ForwardRefExoticComponent<ChatOffBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatOffBroken;
export { ChatOffBroken };
