import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerBroken: ForwardRefExoticComponent<ChatPlusCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerBroken;
export { ChatPlusCornerBroken };
