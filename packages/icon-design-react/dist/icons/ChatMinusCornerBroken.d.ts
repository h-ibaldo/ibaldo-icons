import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerBroken: ForwardRefExoticComponent<ChatMinusCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerBroken;
export { ChatMinusCornerBroken };
