import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardCornerBroken: ForwardRefExoticComponent<ChatForwardCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardCornerBroken;
export { ChatForwardCornerBroken };
