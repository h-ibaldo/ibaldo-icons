import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleBroken: ForwardRefExoticComponent<ChatXDoubleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleBroken;
export { ChatXDoubleBroken };
