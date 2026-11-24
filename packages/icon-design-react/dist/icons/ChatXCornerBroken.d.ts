import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerBroken: ForwardRefExoticComponent<ChatXCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerBroken;
export { ChatXCornerBroken };
